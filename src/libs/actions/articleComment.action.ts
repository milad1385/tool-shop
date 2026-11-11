"use server";

import { auth } from "@/auth";
import connectToDB from "@/configs/db";
import Article from "@/models/Article";
import ArticleComment from "@/models/ArticleComment";
import { sendComment } from "@/validators/backend/comment.validator";
import { revalidatePath } from "next/cache";
import { IActionState } from "../types";
import { isValidObjectId } from "mongoose";

export const createNewComment = async (
  formData: FormData,
): Promise<IActionState> => {
  try {
    const rawData = {
      comment: formData.get("comment") as string,
    };

    const validationResult = sendComment.safeParse(rawData);

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

    await connectToDB();
    const session = await auth();

    if (!session) {
      return {
        success: false,
        message: "برای ثبت کامنت ابتدا باید لاگین کنید",
      };
    }

    const articleLink = formData.get("articleLink");

    const article = await Article.findOne({
      link: articleLink,
    });

    if (!article) {
      return {
        success: false,
        message: "مقاله ای با این آیدی یافت نشد",
      };
    }

    await ArticleComment.create({
      comment: validatedData.comment,
      article: article._id,
      user: session.user.id,
    });

    revalidatePath(`/blog/${article.link}`);

    return {
      success: true,
      message: "کامنت با موفقیت ارسال شد",
    };
  } catch (error) {
    return {
      success: false,
      message: "خطا در ثبت نام، لطفاً دوباره تلاش کنید",
    };
  }
};

export const changeArticleCommentStatus = async (
  commentId: string,
  newStatus: "accept" | "reject" | "pending",
): Promise<IActionState> => {
  try {
    await connectToDB();

    if (!isValidObjectId(commentId)) {
      return {
        success: false,
        message: "آیدی سوال معتبر نمی‌باشد",
      };
    }

    const articleComment = await ArticleComment.findOne({ _id: commentId });

    if (!articleComment) {
      return {
        success: false,
        message: "مقاله ای با این آیدی یافت نشد",
      };
    }

    articleComment.status = newStatus;
    await articleComment.save();

    revalidatePath("/p-admin/questions");

    const statusMessages: Record<string, string> = {
      accept: "کامنت با موفقیت تایید شد",
      reject: "کامنت با موفقیت رد شد",
      pending: "وضعیت کامنت به در انتظار تغییر یافت",
    };

    return {
      success: true,
      message: statusMessages[newStatus],
    };
  } catch (err) {
    return {
      success: false,
      message: "در هنگام تغییر وضعیت کامنت مشکلی به وجود آمد",
    };
  }
};

export const deleteArticleComment = async (
  commentId: string,
): Promise<IActionState> => {
  try {
    await connectToDB();
    if (!isValidObjectId(commentId)) {
      return {
        success: false,
        message: "آیدی کامنت معتبر نمی باشد",
      };
    }

    const articleComment = await ArticleComment.findOne({ _id: commentId });

    if (!articleComment) {
      return {
        success: false,
        message: "کامنت با این آیدی یافت نشد",
      };
    }

    await articleComment.deleteOne();

    revalidatePath("/p-admin/article-comments");

    return {
      success: true,
      message: "کامنت با موفقیت حذف شد",
    };
  } catch (err) {
    return {
      success: false,
      message: "در هنگام حذف کامنت مشکلی به وجود آمد",
    };
  }
};
