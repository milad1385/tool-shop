import connectDB from "@/configs/db";
import User from "@/models/User";
import { normalizeData } from "@/utils/helper";
import { IAddress } from "@/models/User";
import { auth } from "@/auth";

export const getUserAddresses = async (): Promise<IAddress[]> => {
  try {
    await connectDB();
    const session = await auth();

    const user = await User.findById(session?.user?.id)
      .select("addresses")
      .lean();

    if (!user) {
      throw new Error("کاربر یافت نشد");
    }

    return normalizeData(user.addresses || []) as IAddress[];
  } catch (error: any) {
    console.error("خطا در گرفتن آدرس‌های کاربر:", error);
    throw new Error(error.message);
  }
};