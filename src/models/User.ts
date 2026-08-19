import mongoose, { Schema, Model, Document } from "mongoose";

export interface IAddress {
  name: string;
  postalCode: string;
  location: {
    lat: number;
    lan: number;
  };
  address: string;
  cityId: number;
}

export interface IUser extends Document {
  username: string;
  phone: string;
  email: string;
  password: string;
  roles: ("SUPER_ADMIN" | "ADMIN" | "SELLER" | "USER")[];
  addresses: IAddress[];
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
    cityId: {
      type: Number,
      required: [true, "شناسه شهر الزامی است"],
      min: [1, "شناسه شهر معتبر نیست"],
    },
  },
  { _id: true },
);

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "نام کاربری الزامی است"],
      trim: true,
      minlength: [3, "نام کاربری حداقل ۳ کاراکتر باید باشد"],
      maxlength: [50, "نام کاربری حداکثر ۵۰ کاراکتر باید باشد"],
    },
    phone: {
      type: String,
      required: [true, "شماره تلفن الزامی است"],
      unique: true,
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
      required: [true, "رمز عبور الزامی است"],
      trim: true,
      minlength: [8, "رمز عبور حداقل ۸ کاراکتر باید باشد"],
    },
    roles: {
      type: [String],
      enum: ["SUPER_ADMIN", "ADMIN", "SELLER", "USER"],
      default: ["USER"],
    },
    addresses: [addressSchema],
  },
  { timestamps: true },
);

userSchema.index({ phone: 1 });
userSchema.index({ email: 1 });
userSchema.index({ "addresses.cityId": 1 });

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
