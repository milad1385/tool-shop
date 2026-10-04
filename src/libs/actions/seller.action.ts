"use server";

import connectToDB from "@/configs/db";
import { checkAdminAccess } from "./admin.actions";
import Seller from "@/models/Seller";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

export const changeSellerStatus = async (sellerId: string, status: string) => {
  try {
    await connectToDB();
    const adminCheck = await checkAdminAccess(true);
    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }

    if (!isValidObjectId(sellerId)) {
      return {
        success: false,
        message: "آیدی فروشنده معتبر نیست",
      };
    }

    const seller = await Seller.findOne({ _id: sellerId });

    if (!seller) {
      return {
        success: false,
        message: "فروشنده ای با این آیدی یافت نشد",
      };
    }

    if (status === "accept") {
      seller.status = "accept";
      seller.verified = true;
    } else if (status === "reject") {
      seller.status = "reject";
      seller.verified = false;
    }

    await seller.save();

    revalidatePath("/p-admin/sellers");

    return {
      success: true,
      message: `فروشنده با موفقیت ${status === "accept" ? "تایید شد" : "رد شد"}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "لطفا اتصال اینترنت خود را چک کنید",
    };
  }
};
