import { UserRoleEnums } from "@/libs/types";
import mongoose, { Schema, Model, Document } from "mongoose";

export interface IAddress {
  name: string;
  postalCode: string;
  location: {
    lat: number;
    lan: number;
  };
  address: string;
  houseNumber: string;
  unit: string;
}

export interface IUser extends Document {
  fullname: string;
  username: string;
  phone: string;
  email: string;
  password: string;
  roles: UserRoleEnums[];
  addresses: IAddress[];
  provider: "google" | "credentials";
  providerId?: string;
  image?: string;
  emailVerified?: boolean;
  status: "active" | "inactive" | "banned";
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const addressSchema = new Schema<IAddress>(
  {
    name: {
      type: String,
      required: [true, "نام الزامی است"],
      trim: true,
      minlength: [2, "نام حداقل ۲ کاراکتر باید باشد"],
      maxlength: [100, "نام حداکثر ۱۰۰ کاراکتر باید باشد"],
    },
    postalCode: {
      type: String,
      required: [true, "کد پستی الزامی است"],
      trim: true,
      match: [/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"],
    },
    location: {
      lat: {
        type: Number,
        required: [true, "طول جغرافیایی الزامی است"],
        min: [-90, "طول جغرافیایی باید بین ۹۰- تا ۹۰ باشد"],
        max: [90, "طول جغرافیایی باید بین ۹۰- تا ۹۰ باشد"],
      },
      lan: {
        type: Number,
        required: [true, "عرض جغرافیایی الزامی است"],
        min: [-180, "عرض جغرافیایی باید بین ۱۸۰- تا ۱۸۰ باشد"],
        max: [180, "عرض جغرافیایی باید بین ۱۸۰- تا ۱۸۰ باشد"],
      },
    },
    address: {
      type: String,
      required: [true, "آدرس الزامی است"],
      trim: true,
      minlength: [5, "آدرس حداقل ۵ کاراکتر باید باشد"],
      maxlength: [500, "آدرس حداکثر ۵۰۰ کاراکتر باید باشد"],
    },

    houseNumber: {
      type: String,
      required: true,
      trim: true,
      minlength: [1, "پلاک خانه معتبر نیست"],
    },
    unit: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: true },
);

const userSchema = new Schema<IUser>(
  {
    fullname: {
      type: String,
      required: [true, "نام کامل الزامی است"],
      trim: true,
      minlength: [3, "نام کامل حداقل ۳ کاراکتر باید باشد"],
      maxlength: [50, "نام کامل حداکثر ۵۰ کاراکتر باید باشد"],
    },
    username: {
      type: String,
      required: [true, "نام کاربری الزامی است"],
      unique: true,
      trim: true,
      minlength: [3, "نام کاربری حداقل ۳ کاراکتر باید باشد"],
      maxlength: [50, "نام کاربری حداکثر ۵۰ کاراکتر باید باشد"],
    },
    phone: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
      trim: true,
      match: [/^09[0-9]{9}$/, "شماره تلفن باید با ۰۹ شروع شود و ۱۱ رقم باشد"],
    },
    email: {
      type: String,
      required: [true, "ایمیل الزامی است"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "ایمیل معتبر نیست",
      ],
    },
    password: {
      type: String,
      trim: true,
      minlength: [8, "رمز عبور حداقل ۸ کاراکتر باید باشد"],
    },
    roles: {
      type: [String],
      enum: Object.values(UserRoleEnums),
      default: [UserRoleEnums.USER],
    },
    addresses: [addressSchema],

    provider: {
      type: String,
      enum: ["google", "credentials"],
      default: "credentials",
    },
    providerId: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
    },
    lastLogin: {
      type: Date,
    },
  },
  { timestamps: true },
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
