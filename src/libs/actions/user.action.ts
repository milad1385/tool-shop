"use server";

import { auth } from "@/auth";
import connectDB from "@/configs/db";
import { IActionState, UserRoleEnums } from "@/libs/types";
import User from "@/models/User";
import { deleteFile, uploadFile } from "@/utils/uploads";
import { updateUserValidorSchema } from "@/validators/backend/user/user.validator";
import { revalidatePath } from "next/cache";
import { checkAdminAccess } from "./admin.actions";

export async function updateUserInfo(
  formData: FormData,
): Promise<IActionState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        message: "لطفاً وارد شوید",
      };
    }

    await connectDB();

    const user = await User.findById(session.user.id);
    if (!user) {
      return {
        success: false,
        message: "کاربر یافت نشد",
      };
    }

    const rawData = {
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      image: formData.get("image") as File | null,
    };

    const validationResult = updateUserValidorSchema.safeParse({
      name: rawData.name,
      username: rawData.username,
      email: rawData.email,
      phone: rawData.phone,
      image: rawData.image?.size ? rawData.image : undefined,
    });

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

    const errors: Record<string, string> = {};

    if (rawData.username.trim() !== user.username) {
      const existingUsername = await User.findOne({
        username: rawData.username.trim(),
        _id: { $ne: user._id },
      });

      if (existingUsername) {
        errors.username = "این نام کاربری قبلاً استفاده شده است";
      }
    }

    if (rawData.email.toLowerCase().trim() !== user.email) {
      const existingEmail = await User.findOne({
        email: rawData.email.toLowerCase().trim(),
        _id: { $ne: user._id },
      });

      if (existingEmail) {
        errors.email = "این ایمیل قبلاً استفاده شده است";
      }
    }

    if (rawData.phone && rawData.phone.trim() !== user.phone) {
      const existingPhone = await User.findOne({
        phone: rawData.phone.trim(),
        _id: { $ne: user._id },
      });

      if (existingPhone) {
        errors.phone = "این شماره تلفن قبلاً استفاده شده است";
      }
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "اطلاعات وارد شده معتبر نیست",
        errors,
      };
    }

    let newImageUrl = user.image;

    if (rawData.image && rawData.image.size > 0) {
      const uploadResult = await uploadFile(rawData.image, "uploads/users");

      if (user.image) {
        await deleteFile(user.image);
      }

      newImageUrl = uploadResult.url;
    }

    user.fullname = rawData.name.trim();
    user.username = rawData.username.trim();
    user.email = rawData.email.toLowerCase().trim();
    if (rawData.phone) {
      user.phone = rawData.phone.trim();
    }
    if (newImageUrl) {
      user.image = newImageUrl;
    }

    await user.save();

    revalidatePath("/p-user");
    revalidatePath("/p-user/information");

    return {
      success: true,
      message: "اطلاعات با موفقیت به‌روزرسانی شد",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "خطا در آپدیت اطلاعات، لطفاً دوباره تلاش کنید",
    };
  }
}

export const improveUserRoleToAdmin = async (userId: string) => {
  try {
    await connectDB();

    const adminCheck = await checkAdminAccess(true);

    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return {
        success: false,
        message: "کاربری با این آیدی یافت نشد",
      };
    }

    const hasAdmin = user.roles.includes(UserRoleEnums.ADMIN);

    if (hasAdmin) {
      user.roles = user.roles.filter((role) => role !== UserRoleEnums.ADMIN);

      if (!user.roles.includes(UserRoleEnums.USER)) {
        user.roles.push(UserRoleEnums.USER);
      }
    } else {
      user.roles.push(UserRoleEnums.ADMIN);
    }

    await user.save();

    revalidatePath("/p-admin/users");

    return {
      success: true,
      message: hasAdmin
        ? "دسترسی ادمین کاربر حذف شد"
        : "دسترسی ادمین به کاربر اضافه شد",
      roles: user.roles,
    };
  } catch (error) {
    console.error("improveUserRoleToAdmin error:", error);

    return {
      success: false,
      message: "خطایی در تغییر نقش کاربر رخ داد",
    };
  }
};
