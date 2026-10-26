"use server";

import { IActionState } from "../types";
import Question from "@/models/Question";
import { revalidatePath } from "next/cache";
import { checkAdminAccess } from "./admin.actions";
import { questionSchema } from "@/validators/backend/question.validator";
import connectToDB from "@/configs/db";
import { isValidObjectId } from "mongoose";

export const createQuestion = async (
  formData: FormData,
): Promise<IActionState> => {
  try {
    const adminCheck = await checkAdminAccess();
    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }

    const rawData = {
      question: formData.get("question") as string,
      answer: formData.get("answer") as string,
      order: parseInt(formData.get("order") as string),
    };

    const validationResult = questionSchema.safeParse(rawData);

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

    await Question.create({
      question: validatedData.question,
      answer: validatedData.answer,
      order: validatedData.order,
    });

    revalidatePath("/p-admin/questions");
    revalidatePath("/");

    return {
      success: true,
      message: "سوال با موفقیت ایجاد شد",
    };
  } catch (error) {
    return {
      success: false,
      message: "در هنگام ایجاد سوال مشکلی به وجود آمد",
    };
  }
};

export const deleteQuestion = async (questionID): Promise<IActionState> => {
  try {
    await connectToDB();
    if (!isValidObjectId(questionID)) {
      return {
        success: false,
        message: "آیدی سوال معتبر نم باشد",
      };
    }

    const question = await Question.findOne({ _id: questionID });

    if (!question) {
      return {
        success: false,
        message: "سوال مورد نظر با این آیدی یافت نشد",
      };
    }

    await question.deleteOne();

    revalidatePath("/p-admin/questions");
    
    return {
      success: true,
      message: "سوال با موفقیت حذف شد",
    };
  } catch (err) {
    return {
      success: false,
      message: "در هنگام ایجاد سوال مشکلی به وجود آمد",
    };
  }
};

export const changeQuestionStatus = async (
  questionID: string,
  newStatus: "accept" | "reject" | "pending"
): Promise<IActionState> => {
  try {
    await connectToDB();

    if (!isValidObjectId(questionID)) {
      return {
        success: false,
        message: "آیدی سوال معتبر نمی‌باشد",
      };
    }

    const question = await Question.findOne({ _id: questionID });

    if (!question) {
      return {
        success: false,
        message: "سوال مورد نظر با این آیدی یافت نشد",
      };
    }

    question.status = newStatus;
    await question.save();

    revalidatePath("/p-admin/questions");

    const statusMessages: Record<string, string> = {
      accept: "سوال با موفقیت تایید شد",
      reject: "سوال با موفقیت رد شد",
      pending: "وضعیت سوال به در انتظار تغییر یافت",
    };

    return {
      success: true,
      message: statusMessages[newStatus],
    };
  } catch (err) {
    return {
      success: false,
      message: "در هنگام تغییر وضعیت سوال مشکلی به وجود آمد",
    };
  }
};
