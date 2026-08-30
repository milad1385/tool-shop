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
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  try {
    const rawData = {
      username: formData.get("username") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      fullname: formData.get("fullname") as string,
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
      fullname: validatedData.fullname,
      roles: isAdmin > 0 ? ["USER"] : ["SUPER_ADMIN"],
    });

    const accessToken = jwt.sign(
      {
        id: user._id.toString(),
        username: user.username,
        fullname: user.fullname,
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
      fullname: user.fullname,
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
        fullname: user.fullname,
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
        fullname: user.fullname,
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

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  redirect("/auth/login");
}

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return { success: false, user: null };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      username: string;
      fullname: string;
      phone: string;
      email: string;
      roles: string[];
    };

    await connectDB();
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return { success: false, user: null };
    }

    return {
      success: true,
      user: {
        id: user._id.toString(),
        username: user.username,
        fullname: user.fullname,
        phone: user.phone,
        email: user.email,
        roles: user.roles,
      },
    };
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      const cookieStore = await cookies();
      cookieStore.delete("accessToken");
      return { success: false, user: null, expired: true };
    }

    return { success: false, user: null };
  }
}

export async function hasToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  return !!token;
}
