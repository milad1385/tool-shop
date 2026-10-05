"use server";

import { revalidatePath } from "next/cache";
import Article from "@/models/Article";
import { IActionState } from "@/libs/types";
import { checkAdminAccess } from "./admin.actions";
import connectToDB from "@/configs/db";
import { articleSchema } from "@/validators/backend/article.validator";
import { uploadFile } from "@/utils/uploads";

export async function createArticle(formData: FormData): Promise<IActionState> {
  try {
    await connectToDB();
    const adminCheck = await checkAdminAccess();
    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }

    const rawData = {
      title: formData.get("title") as string,
      link: formData.get("link") as string,
      tags: formData.get("tags") as string,
      readingTime: formData.get("readingTime") as string,
      shortDescription: formData.get("shortDescription") as string,
      category: formData.get("category") as string,
      image: formData.get("image") as File,
    };

    const validationResult = articleSchema.safeParse(rawData);

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

    const existingArticle = await Article.findOne({
      link: validatedData.link,
    });

    if (existingArticle) {
      return {
        success: false,
        message: "مقاله‌ای با این لینک قبلاً ثبت شده است",
        errors: {
          link: "این لینک قبلاً استفاده شده است",
        },
      };
    }

    const tagsArray = validatedData.tags
      .split(/[،,]+/)
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    let imageUrl = "";
    if (validatedData.image && validatedData.image.size > 0) {
      const uploadResult = await uploadFile(
        validatedData.image,
        "uploads/articles",
      );

      if (!uploadResult.success) {
        return {
          success: false,
          message: uploadResult.error || "خطا در آپلود تصویر",
        };
      }

      imageUrl = uploadResult.url;
    }

    await Article.create({
      title: validatedData.title,
      link: validatedData.link,
      tags: tagsArray,
      readingTime: validatedData.readingTime,
      shortDescription: validatedData.shortDescription,
      content: formData.get("content") as string,
      category: validatedData.category,
      status: (formData.get("status") as string) || "published",
      image: imageUrl,
      author: adminCheck.user.id,
    });

    revalidatePath("/p-admin/articles");
    revalidatePath("/articles");
    revalidatePath("/");

    return {
      success: true,
      message: "مقاله با موفقیت ایجاد شد",
    };
  } catch (error) {
    return {
      success: false,
      message: "خطا در ساخت مقاله، لطفاً دوباره تلاش کنید",
    };
  }
}
