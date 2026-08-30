"use server";

import connectDB from "@/configs/db";
import Slider from "@/models/Slider";
import { uploadFile } from "@/utils/uploads";
import { revalidatePath } from "next/cache";
import { checkAdminAccess } from "./admin.actions";
import { sliderSchema } from "@/validators/backend/slider.validator";

export type SliderState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function createSlider(formData: FormData): Promise<SliderState> {
  try {
    const adminCheck = await checkAdminAccess();
    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }
    const rawData = {
      title: formData.get("title") as string,
      href: formData.get("href") as string,
      priority: parseInt(formData.get("priority") as string) || 3,
      image: formData.get("image") as File,
    };

    const validationResult = sliderSchema.safeParse(rawData);

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

    let imageUrl = "";
    if (validatedData.image && validatedData.image.size > 0) {
      const uploadResult = await uploadFile(
        validatedData.image,
        "uploads/sliders",
      );

      if (!uploadResult.success) {
        return {
          success: false,
          message: uploadResult.error || "خطا در آپلود تصویر",
        };
      }

      imageUrl = uploadResult.url;
    }

    const slider = await Slider.create({
      title: validatedData.title,
      href: validatedData.href,
      priority: validatedData.priority,
      image: imageUrl,
      status: "PENDING",
    });

    revalidatePath("/p-admin/sliders");
    revalidatePath("/");

    return {
      success: true,
      message: `اسلایدر  با موفقیت ایجاد شد`,
    };
  } catch (error) {
    console.error("خطا در ساخت اسلایدر:", error);
    return {
      success: false,
      message: "خطا در ساخت اسلایدر، لطفاً دوباره تلاش کنید",
    };
  }
}
