import connectToDB from "@/configs/db";
import User, { IUser } from "@/models/User";
import { IAuthorizeCredentials, UserRoleEnums } from "@/libs/types";
import { hash, compare } from "bcryptjs";
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
            image,
          },
        },
      );
      return existingUser;
    }

    const baseUsername = email.split("@")[0] || `user`;
    const uniqueUsername = `${baseUsername}_${Date.now().toString().slice(-4)}`;

    const hashedPassword = await hash(email, 12);
    const usersCount = await User.countDocuments({});

    const newUser = await User.create({
      fullname: name || "کاربر گوگل",
      username: uniqueUsername,
      email: email.toLowerCase().trim(),
      roles:
        usersCount > 0 ? [UserRoleEnums.USER] : [UserRoleEnums.SUPER_ADMIN],
      password: hashedPassword,
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
    throw new Error(error.message);
  }
}

export async function authorizeCredentials({
  identifier,
  password,
}: IAuthorizeCredentials) {
  try {
    if (!identifier || !password) {
      throw new Error("ایمیل و رمز عبور الزامی است");
    }

    await connectToDB();

    const user = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (!user) {
      throw new Error("ایمیل یا رمز عبور اشتباه است");
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("ایمیل یا رمز عبور اشتباه است");
    }

    if (user.status === "banned") {
      throw new Error("حساب کاربری شما مسدود شده است");
    }

    await User.findByIdAndUpdate(user._id, {
      lastLogin: new Date(),
    });

    return {
      id: user._id.toString(),
      email: user.email,
      name: user.fullname,
      image: user.image,
      roles: user.roles.map((r: any) => r.toString()),
      username: user.username,
      phone: user.phone || "",
    };
  } catch (error: any) {
    throw new Error(error.message || "خطا در ورود");
  }
}
