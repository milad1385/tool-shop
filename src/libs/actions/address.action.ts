"use server";

import connectDB from "@/configs/db";
import User from "@/models/User";
import { userAddress } from "@/validators/frontend/user/user.validator";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export type AddressState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  address?: any;
};

export async function addUserAddress(
  formData: FormData,
): Promise<AddressState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, message: "لطفاً وارد شوید" };
    }

    const rawData = {
      name: formData.get("name") as string,
      mobile: formData.get("mobile") as string,
      address: formData.get("address") as string,
      houseNumber: formData.get("houseNumber") as string,
      unit: formData.get("unit") as string,
      postalCode: formData.get("postalCode") as string,
      lat: parseFloat(formData.get("lat") as string),
      lan: parseFloat(formData.get("lan") as string),
    };

    try {
      await userAddress.validate(rawData, { abortEarly: false });
    } catch (validationError: any) {
      const errors: Record<string, string> = {};
      validationError.inner?.forEach((err: any) => {
        errors[err.path] = err.message;
      });

      return {
        success: false,
        message: "اطلاعات وارد شده معتبر نیست",
        errors,
      };
    }

    if (isNaN(rawData.lat) || isNaN(rawData.lan)) {
      return {
        success: false,
        message: "لطفاً موقعیت مکانی را انتخاب کنید",
        errors: {
          location: "موقعیت مکانی الزامی است",
        },
      };
    }

    await connectDB();

    const user = await User.findById(session.user.id);
    if (!user) {
      return { success: false, message: "کاربر یافت نشد" };
    }

    const isDuplicate = user.addresses.some(
      (addr: any) =>
        addr.address === rawData.address &&
        addr.houseNumber === rawData.houseNumber &&
        addr.unit === rawData.unit,
    );

    if (isDuplicate) {
      return {
        success: false,
        message: "این آدرس قبلاً ثبت شده است",
        errors: {
          address: "این آدرس قبلاً ثبت شده است",
        },
      };
    }

    const newAddress = {
      name: rawData.name.trim(),
      mobile: rawData.mobile.trim(),
      address: rawData.address.trim(),
      houseNumber: rawData.houseNumber.trim(),
      unit: rawData.unit.trim(),
      postalCode: rawData.postalCode.trim(),
      location: {
        lat: rawData.lat,
        lan: rawData.lan,
      },
    };
    user.addresses.push(newAddress);
    await user.save();

    const savedAddress = user.addresses[user.addresses.length - 1];

    revalidatePath("/p-user/addresses");
    revalidatePath("/checkout");

    return {
      success: true,
      message: "آدرس با موفقیت اضافه شد",
      address: JSON.parse(JSON.stringify(savedAddress)),
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "خطا در اضافه کردن آدرس",
    };
  }
}
