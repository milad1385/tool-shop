"use server";

import { IActionState } from "../types";
import Question from "@/models/Question";
import { revalidatePath } from "next/cache";
import { checkAdminAccess } from "./admin.actions";
import { questionSchema } from "@/validators/backend/question.validator";
import connectToDB from "@/configs/db";

export const createQuestion = async (formData: FormData): Promise<IActionState> => {
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
      asnwer: formData.get("asnwer") as string,
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

