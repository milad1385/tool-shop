import connectToDB from "@/configs/db";
import User, { IUser } from "@/models/User";
import { UserRoleEnums } from "@/libs/types";

interface ICreateGoogleUser {
  email: string;
  name?: string | null;
  image?: string | null;
  providerId?: string;
}

export async function createGoogleUser({
  email,
  name,
  image,
  providerId,
}: ICreateGoogleUser): Promise<IUser> {
  try {
    await connectToDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      await User.findOneAndUpdate(
        { email },
        {
          $set: {
            emailVerified: true,
          },
        },
      );
      return existingUser;
    }

    const baseUsername = email.split("@")[0] || `user`;
    const uniqueUsername = `${baseUsername}_${Date.now().toString().slice(-4)}`;

    const newUser = await User.create({
      fullname: name || "کاربر گوگل",
      username: uniqueUsername,
      email: email.toLowerCase().trim(),
      roles: [UserRoleEnums.USER],
      addresses: [],
      provider: "google",
      providerId: providerId,
      image: image,
      emailVerified: true,
      status: "active",
      lastLogin: new Date(),
    });

    return newUser;
  } catch (error: any) {
    console.error("خطا در ساخت کاربر گوگل:", error);
    throw new Error(error.message);
  }
}
