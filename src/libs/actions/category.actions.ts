"use server";

import connectDB from "@/configs/db";
import Category from "@/models/Category";
import { deleteFile, uploadFile } from "@/utils/uploads";
import {
  createCategorySchema,
  updateCategorySchema,
} from "@/validators/backend/category.validator";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";
import { checkAdminAccess } from "./admin.actions";
import { parseFilters } from "@/utils/helper";

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
      filters: formData.get("filters") as string,
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

    const filtersArray = parseFilters(validatedData.filters);

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
      filters: filtersArray,
    });

    revalidatePath("/p-admin/categories");
    revalidatePath("/categories");

    return {
      success: true,
      message: `دسته بندی  با موفقیت ایجاد شد`,
    };
  } catch (error) {
    console.error("خطا در ساخت دسته بندی:", error);
    return {
      success: false,
      message: "خطا در ساخت دسته بندی، لطفاً دوباره تلاش کنید",
    };
  }
}

export const deleteCategory = async (id: string): Promise<CategoryState> => {
  try {
    const adminCheck = await checkAdminAccess();
    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }

    if (!isValidObjectId(id)) {
      return {
        success: false,
        message: "آیدی ارسال شده معتبر نیست",
      };
    }

    const category = await Category.findByIdAndDelete(id);
    if (category.parent) {
      await Category.deleteMany({ parent: category._id });
    }
    if (!category) {
      return {
        success: false,
        message: `دسته بندی با این آیدی یافت نشد : ${id}`,
      };
    }

    await deleteFile(category.image);
    revalidatePath("/p-admin/categories");
    return {
      success: true,
      message: "دسته بندی با موفقیت حذف شد",
    };
  } catch (error) {
    console.error("خطا در حذف دسته بندی:", error);
    return {
      success: false,
      message: "خطا در حذف دسته بندی، لطفاً دوباره تلاش کنید",
    };
  }
};
export async function updateCategory(
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

    const categoryId = formData.get("categoryId") as string;
    if (!categoryId) {
      return {
        success: false,
        message: "شناسه دسته بندی الزامی است",
      };
    }

    await connectDB();
    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return {
        success: false,
        message: "دسته بندی یافت نشد",
      };
    }

    const rawData = {
      name: formData.get("name") as string,
      href: formData.get("href") as string,
      desc: formData.get("desc") as string,
      tags: formData.get("tags") as string,
      category: formData.get("category") as string,
      image: formData.get("image"),
    };

    const validationResult = updateCategorySchema.safeParse(rawData);

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

    const tagsArray = validatedData.tags
      .split(/[،,]+/)
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    let imageUrl = existingCategory.image;

    const imageFile = validatedData.image;
    if (imageFile && imageFile instanceof File && imageFile.size > 0) {
      if (existingCategory.image) {
        try {
          await deleteFile(existingCategory.image);
        } catch (error) {
          console.error("خطا در حذف تصویر قبلی:", error);
        }
      }

      const uploadResult = await uploadFile(imageFile, "uploads/categories");

      if (!uploadResult.success) {
        return {
          success: false,
          message: uploadResult.error || "خطا در آپلود تصویر",
        };
      }

      imageUrl = uploadResult.url;
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      {
        name: validatedData.name,
        href: validatedData.href,
        desc: validatedData.desc,
        parent: validatedData.category || null,
        tags: tagsArray,
        image: imageUrl,
      },
      { new: true, runValidators: true },
    );

    if (!updatedCategory) {
      return {
        success: false,
        message: "خطا در به‌روزرسانی دسته بندی",
      };
    }

    revalidatePath("/p-admin/categories");
    revalidatePath("/categories");
    revalidatePath(`/categories/${updatedCategory.href}`);
    return {
      success: true,
      message: `دسته بندی با موفقیت به‌روزرسانی شد`,
    };
  } catch (error) {
    console.error("خطا در به‌روزرسانی دسته بندی:", error);
    return {
      success: false,
      message: "خطا در به‌روزرسانی دسته بندی، لطفاً دوباره تلاش کنید",
    };
  }
}
