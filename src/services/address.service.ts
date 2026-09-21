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
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserAddressById = async (
  addressId: string,
): Promise<IAddress | null> => {
  try {
    await connectDB();
    const session = await auth();

    const user = await User.findById(session?.user?.id)
      .select("addresses")
      .lean();

    if (!user) {
      throw new Error("کاربر یافت نشد");
    }

    const address = user.addresses?.find(
      (addr: any) => addr._id.toString() === addressId,
    );

    if (!address) {
      return null;
    }

    return normalizeData(address) as IAddress;
  } catch (error) {
    throw new Error(error.message);
  }
};
