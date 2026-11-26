"use server";

import { revalidatePath } from "next/cache";
import Comparison from "@/models/Comparison";
import mongoose from "mongoose";
import { auth } from "@/auth";
import { IActionState } from "../types";
import connectToDB from "@/configs/db";
import { normalizeData } from "@/utils/helper";

const MAX_ITEMS = 4;

export async function getComparison() {
  const session = await auth();
  if (!session?.user?.id) return [];

  await connectToDB();

  const items = await Comparison.find({ user: session.user.id })
    .populate("product")
    .sort({ createdAt: 1 })
    .lean();

  return normalizeData(items.map((i) => i.product));
}

export async function addToComparison(
  productId: string,
): Promise<IActionState> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, message: "ابتدا در سایت لاگین کنید" };
  }

  if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
    return {
      success: false,
      message: "اطلاعات نامعتبر است",
      errors: { productId: "شناسه محصول نامعتبر است" },
    };
  }

  await connectToDB();

  const count = await Comparison.countDocuments({ user: session.user.id });
  if (count >= MAX_ITEMS) {
    return {
      success: false,
      message: `حداکثر ${MAX_ITEMS} محصول قابل مقایسه است`,
    };
  }

  try {
    await Comparison.create({
      user: session.user.id,
      product: productId,
    });
    revalidatePath("/comparison");
    revalidatePath("/products");
    return { success: true, message: "به لیست مقایسه اضافه شد" };
  } catch (err: any) {
    if (err.code === 11000) {
      return { success: false, message: "این محصول قبلاً اضافه شده" };
    }
    return { success: false, message: "خطای سرور، دوباره تلاش کنید" };
  }
}

export async function removeFromComparison(
  productId: string,
): Promise<IActionState> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, message: "ابتدا وارد شوید" };
  }

  await connectToDB();

  const result = await Comparison.deleteOne({
    user: session.user.id,
    product: productId,
  });

  if (result.deletedCount === 0) {
    return { success: false, message: "محصول در لیست پیدا نشد" };
  }

  revalidatePath("/compare");
  return { success: true, message: "از لیست مقایسه حذف شد" };
}

export async function toggleComparison(
  productId: string,
): Promise<IActionState> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, message: "ابتدا وارد شوید" };
  }

  await connectToDB();

  const existing = await Comparison.findOne({
    user: session.user.id,
    product: productId,
  });

  if (existing) {
    await existing.deleteOne();
    revalidatePath("/compare");
    return { success: true, message: "حذف شد", data: { added: false } };
  }

  const count = await Comparison.countDocuments({ user: session.user.id });
  if (count >= MAX_ITEMS) {
    return {
      success: false,
      message: `حداکثر ${MAX_ITEMS} محصول قابل مقایسه است`,
    };
  }

  try {
    await Comparison.create({
      user: session.user.id,
      product: productId,
    });
    revalidatePath("/compare");
    return { success: true, message: "اضافه شد", data: { added: true } };
  } catch {
    return { success: false, message: "خطا در افزودن" };
  }
}
