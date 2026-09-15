"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectDB from "@/configs/db";
import User from "@/models/User";
import { UserRoleEnums } from "../types";
import { auth } from "@/auth";

export type AdminCheckResult = {
  success: boolean;
  message: string;
  user?: {
    id: string;
    username: string;
    email: string;
    roles: string[];
  };
};

export async function checkAdminAccess(): Promise<AdminCheckResult> {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return {
        success: false,
        message: "احراز هویت نشده است",
      };
    }

    await connectDB();
    const user = await User.findOne({
      email: session.user.email.toLowerCase().trim(),
    })
      .select("username email roles status")
      .lean();

    if (!user) {
      return {
        success: false,
        message: "کاربر یافت نشد",
      };
    }

    if (user.status === "banned") {
      return {
        success: false,
        message: "حساب کاربری شما مسدود شده است",
      };
    }

    const isAdmin =
      user.roles.includes(UserRoleEnums.SUPER_ADMIN) ||
      user.roles.includes(UserRoleEnums.ADMIN);

    if (!isAdmin) {
      return {
        success: false,
        message: "دسترسی غیرمجاز. شما ادمین نیستید",
      };
    }

    return {
      success: true,
      message: "دسترسی مجاز",
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        roles: user.roles,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "خطا در بررسی دسترسی",
    };
  }
}

export async function getAdminUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return { success: false, user: null };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      username: string;
      email: string;
      roles: string[];
    };

    const isAdmin =
      decoded.roles.includes("SUPER_ADMIN") || decoded.roles.includes("ADMIN");

    if (!isAdmin) {
      return { success: false, user: null };
    }

    await connectDB();
    const user = await User.findById(decoded.id)
      .select("username email roles")
      .lean();

    if (!user) {
      return { success: false, user: null };
    }

    return {
      success: true,
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        roles: user.roles,
      },
    };
  } catch (error) {
    return { success: false, user: null };
  }
}

export async function isAdmin(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return false;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      roles: string[];
    };

    return (
      decoded.roles.includes("SUPER_ADMIN") || decoded.roles.includes("ADMIN")
    );
  } catch (error) {
    return false;
  }
}

export async function getCurrentUserRole(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      roles: string[];
    };

    return decoded.roles[0] || null;
  } catch (error) {
    return null;
  }
}
