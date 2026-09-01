"use server";

import connectDB from "@/configs/db";
import Slider from "@/models/Slider";
import { deleteFile, uploadFile } from "@/utils/uploads";
import { revalidatePath } from "next/cache";
import { checkAdminAccess } from "./admin.actions";
import {
  sliderSchema,
  updateSliderSchema,
} from "@/validators/backend/slider.validator";
import { isValidObjectId } from "mongoose";

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

export const deleteSlider = async (id: string): Promise<SliderState> => {
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

    const slider = await Slider.findByIdAndDelete(id);

    if (!slider) {
      return {
        success: false,
        message: `اسلایدر با این آیدی یافت نشد : ${id}`,
      };
    }

    await deleteFile(slider.image);
    revalidatePath("/p-admin/sliders");
    return {
      success: true,
      message: "اسلایدر با موفقیت حذف شد",
    };
  } catch (error) {
    console.error("خطا در حذف اسلایدر:", error);
    return {
      success: false,
      message: "خطا در حذف اسلایدر لطفاً دوباره تلاش کنید",
    };
  }
};

export const changeStatus = async (id: string): Promise<SliderState> => {
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

    const slider = await Slider.findById(id);

    if (!slider) {
      return {
        success: false,
        message: `اسلایدر با این آیدی یافت نشد : ${id}`,
      };
    }

    await Slider.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          status: slider.status === "ACCEPT" ? "REJECT" : "ACCEPT",
        },
      },
    );

    revalidatePath("/p-admin/sliders");
    return {
      success: true,
      message: `اسلایدر با موفقیت ${slider.status === "ACCEPT" ? "رد" : "تایید"} شد`,
    };
  } catch (error) {
    console.error("خطا در تغییر وضعیت اسلایدر:", error);
    return {
      success: false,
      message: "خطا در تغییر وضعیت اسلایدر لطفاً دوباره تلاش کنید",
    };
  }
};

export async function updateSlider(formData: FormData): Promise<SliderState> {
  try {
    const adminCheck = await checkAdminAccess();
    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }

    const sliderId = formData.get("sliderId") as string;
    if (!sliderId) {
      return {
        success: false,
        message: "شناسه اسلایدر الزامی است",
      };
    }

    await connectDB();
    const existingSlider = await Slider.findById(sliderId);
    if (!existingSlider) {
      return {
        success: false,
        message: "اسلایدر یافت نشد",
      };
    }

    const rawData = {
      title: formData.get("title") as string,
      href: formData.get("href") as string,
      priority: parseInt(formData.get("priority") as string) || 3,
      image: formData.get("image"),
    };

    const validationResult = updateSliderSchema.safeParse(rawData);

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

    let imageUrl = existingSlider.image;

    const imageFile = validatedData.image;
    if (imageFile && imageFile instanceof File && imageFile.size > 0) {
      if (existingSlider.image) {
        await deleteFile(existingSlider.image);
      }

      const uploadResult = await uploadFile(imageFile, "uploads/sliders");

      if (!uploadResult.success) {
        return {
          success: false,
          message: uploadResult.error || "خطا در آپلود تصویر",
        };
      }

      imageUrl = uploadResult.url;
    }

    const updatedSlider = await Slider.findByIdAndUpdate(
      sliderId,
      {
        title: validatedData.title,
        href: validatedData.href,
        priority: validatedData.priority,
        image: imageUrl,
      },
      { new: true, runValidators: true },
    );

    if (!updatedSlider) {
      return {
        success: false,
        message: "خطا در به‌روزرسانی اسلایدر",
      };
    }

    revalidatePath("/p-admin/sliders");
    revalidatePath("/");

    return {
      success: true,
      message: `اسلایدر با موفقیت به‌روزرسانی شد`,
    };
  } catch (error) {
    return {
      success: false,
      message: "خطا در به‌روزرسانی اسلایدر، لطفاً دوباره تلاش کنید",
    };
  }
}
