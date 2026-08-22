"use server";

import connectDB from "@/configs/db";
import Category from "@/models/Category";
import { uploadFile } from "@/utils/uploads";
import { createCategorySchema } from "@/validators/backend/category.validator";
import { revalidatePath } from "next/cache";
import { checkAdminAccess } from "./admin.actions";

export type CategoryState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function createCategory(
  formData: FormData,
): Promise<CategoryState> {
  try {
    const adminCheck = await checkAdminAccess();
    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }

    const rawData = {
      name: formData.get("name") as string,
      href: formData.get("href") as string,
      desc: formData.get("desc") as string,
      tags: formData.get("tags") as string,
      category: formData.get("category") as string,
      image: formData.get("image") as File,
    };

    const validationResult = createCategorySchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        errors[field] = err.message;
      });

      return {
        success: false,
        message: "اطلاعات وارد شده معتبر نیست",
        errors,
      };
    }

    const validatedData = validationResult.data;
    await connectDB();

    const tagsArray = validatedData.tags
      .split(/[،,]+/)
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    let imageUrl = "";
    if (validatedData.image && validatedData.image.size > 0) {
      const uploadResult = await uploadFile(
        validatedData.image,
        "uploads/categories",
      );

      if (!uploadResult.success) {
        return {
          success: false,
          message: uploadResult.error || "خطا در آپلود تصویر",
        };
      }

      imageUrl = uploadResult.url;
    }

    const category = await Category.create({
      name: validatedData.name,
      href: validatedData.href,
      desc: validatedData.desc,
      parent: validatedData.category || null,
      tags: tagsArray,
      image: imageUrl,
    });

    revalidatePath("/p-admin/categories");
    revalidatePath("/categories");

    return {
      success: true,
      message: `دسته بندی با موفقیت ایجاد شد`,
    };
  } catch (error) {
    console.error("خطا در ساخت دسته بندی:", error);
    return {
      success: false,
      message: "خطا در ساخت دسته بندی، لطفاً دوباره تلاش کنید",
    };
  }
}
