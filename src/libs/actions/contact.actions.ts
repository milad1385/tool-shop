"use server";

import connectDB from "@/configs/db";
import ContactUs from "@/models/ContactUs";
import { sendContact } from "@/validators/backend/conatctus.validator";
import { revalidatePath } from "next/cache";
import { IActionState } from "../types";

export async function sendContactMessage(
  formData: FormData,
): Promise<IActionState> {
  try {
    const rawData = {
      email: formData.get("email") as string,
      fullname: formData.get("fullname") as string,
      message: formData.get("message") as string,
    };

    const validationResult = sendContact.safeParse(rawData);

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

    await ContactUs.create({
      fullname: validatedData.fullname.trim(),
      email: validatedData.email.toLowerCase().trim(),
      message: validatedData.message.trim(),
      status: "PENDING",
    });

    revalidatePath("/p-admin/contact-us");

    return {
      success: true,
      message: "پیغام شما با موفقیت ارسال شد..",
    };
  } catch (error: any) {
    return {
      success: false,
      message: "خطا در ارسال پیغام، لطفاً دوباره تلاش کنید",
    };
  }
}
