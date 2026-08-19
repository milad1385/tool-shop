"use server";

import connectDB from "@/configs/db";
import User from "@/models/User";
import {
  loginSchema,
  registerSchema,
} from "@/validators/backend/user/user.validator";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function registerUser(formData: FormData) {
  try {
    const rawData = {
      username: formData.get("username") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const validationResult = registerSchema.safeParse(rawData);

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0].message;
      return {
        success: false,
        message: firstError,
      };
    }

    const validatedData = validationResult.data;
    await connectDB();

    const existingUser = await User.findOne({
      $or: [{ phone: validatedData.phone }, { email: validatedData.email }],
    });

    if (existingUser) {
      return { success: false, message: "این مشخصات قبلاً ثبت شده است" };
    }

    const hashedPassword = await hash(validatedData.password, 12);

    const isAdmin = await User.countDocuments({});

    const user = await User.create({
      username: validatedData.username,
      phone: validatedData.phone,
      email: validatedData.email,
      password: hashedPassword,
      roles: isAdmin > 0 ? ["USER"] : ["SUPER_ADMIN"],
    });

    const accessToken = jwt.sign(
      {
        id: user._id.toString(),
        username: user.username,
        phone: user.phone,
        email: user.email,
        roles: user.roles,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" },
    );

    const cookieStore = await cookies();
    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    const userObject = {
      id: user._id.toString(),
      username: user.username,
      phone: user.phone,
      email: user.email,
      roles: user.roles,
    };

    return {
      success: true,
      message: "ثبت نام با موفقیت انجام شد",
      user: userObject,
    };
  } catch (error) {
    console.error("خطا در ثبت نام:", error);
    return {
      success: false,
      message: "خطا در ثبت نام، لطفاً دوباره تلاش کنید",
    };
  }
}

export async function loginUser(formData: FormData) {
  try {
    const rawData = {
      identifier: formData.get("identifier") as string,
      password: formData.get("password") as string,
    };

    const validationResult = loginSchema.safeParse(rawData);

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0].message;
      return {
        success: false,
        message: firstError,
      };
    }

    const validatedData = validationResult.data;
    await connectDB();

    const user = await User.findOne({
      $or: [
        { username: validatedData.identifier },
        { email: validatedData.identifier },
      ],
    });

    if (!user) {
      return {
        success: false,
        message: "ایمیل یا رمز عبور اشتباه است",
      };
    }

    const isPasswordValid = await compare(
      validatedData.password,
      user.password,
    );

    if (!isPasswordValid) {
      return {
        success: false,
        message: "ایمیل یا رمز عبور اشتباه است",
      };
    }

    const accessToken = jwt.sign(
      {
        id: user._id.toString(),
        username: user.username,
        phone: user.phone,
        email: user.email,
        roles: user.roles,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" },
    );

    const cookieStore = await cookies();
    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return {
      success: true,
      message: "ورود با موفقیت انجام شد",
      user: {
        id: user._id.toString(),
        username: user.username,
        phone: user.phone,
        email: user.email,
        roles: user.roles,
      },
    };
  } catch (error) {
    console.error("خطا در ورود:", error);
    return {
      success: false,
      message: "خطا در ورود، لطفاً دوباره تلاش کنید",
    };
  }
}
