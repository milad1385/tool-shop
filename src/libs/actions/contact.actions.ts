"use server";

import connectDB from "@/configs/db";
import ContactUs from "@/models/ContactUs";
import { sendContact } from "@/validators/backend/conatctus.validator";
import { revalidatePath } from "next/cache";
import { IActionState } from "../types";
import { checkAdminAccess } from "./admin.actions";
import { isValidObjectId } from "mongoose";
import { sendAnswer } from "../mailer";

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
      message: "پیغام شما با موفقیت ارسال شد.",
    };
  } catch (error: any) {
    return {
      success: false,
      message: "خطا در ارسال پیغام، لطفاً دوباره تلاش کنید",
    };
  }
}

export const deleteContact = async (id: string): Promise<IActionState> => {
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

    const contact = await ContactUs.findByIdAndDelete(id);

    if (!contact) {
      return {
        success: false,
        message: `پیغام با این آیدی یافت نشد : ${id}`,
      };
    }

    revalidatePath("/p-admin/contacts");
    return {
      success: true,
      message: "پیغام با موفقیت حذف شد",
    };
  } catch (error) {
    console.error("خطا در حذف پیغام:", error);
    return {
      success: false,
      message: "خطا در حذف پیغام ، لطفاً دوباره تلاش کنید",
    };
  }
};

export const sendAnswerContact = async (
  id: string,
  message: string,
): Promise<IActionState> => {
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

    const contact = await ContactUs.findOne({ _id: id });

    if (!contact) {
      return {
        success: false,
        message: `پیغام با این آیدی یافت نشد : ${id}`,
      };
    }

    if (!message) {
      return {
        success: false,
        message: `پیام خود را وارد کنید`,
      };
    }

    await sendAnswer(contact.email, message);

    await ContactUs.findOneAndUpdate(
      { _id: contact._id },
      { status: "ANSWERED" },
    );

    revalidatePath("/p-admin/contacts");
    return {
      success: true,
      message: "پیغام با موفقیت پاسخ داده شد",
    };
  } catch (error) {
    return {
      success: false,
      message: "اتصال خود را به اینترنت چک کنید",
    };
  }
};
