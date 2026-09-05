import mongoose, { Schema, Model, Document } from "mongoose";

export interface ISellerContactDetails {
  phone: string;
  email: string;
  address?: string;
  postalCode?: string;
}

export interface ISeller extends Document {
  name: string;
  user: mongoose.Types.ObjectId;
  contactDetails: ISellerContactDetails;
  city: string;
  logo?: string;
  description?: string;
  status?: "active" | "inactive" | "pending";
  verified?: boolean;
  rating?: number;
  reviewCount?: number;
  commission?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const ContactDetailsSchema = new Schema<ISellerContactDetails>({
  phone: {
    type: String,
    required: [true, "شماره تلفن الزامی است"],
    trim: true,
    match: [/^[0-9]{11}$/, "شماره تلفن باید ۱۱ رقم باشد"],
  },
  email: {
    type: String,
    required: [true, "ایمیل الزامی است"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "ایمیل معتبر نیست"],
  },
  address: {
    type: String,
    trim: true,
  },
  postalCode: {
    type: String,
    trim: true,
    match: [/^[0-9]{10}$/, "کد پستی باید ۱۰ رقم باشد"],
  },
});

const sellerSchema = new Schema<ISeller>(
  {
    name: {
      type: String,
      required: [true, "نام فروشنده الزامی است"],
      trim: true,
      minlength: [3, "نام حداقل ۳ کاراکتر باید باشد"],
      maxlength: [100, "نام حداکثر ۱۰۰ کاراکتر باید باشد"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "کاربر الزامی است"],
    },
    contactDetails: {
      type: ContactDetailsSchema,
      required: [true, "اطلاعات تماس الزامی است"],
    },
    city: {
      type: String,
      required: [true, "شهر الزامی است"],
      trim: true,
      minlength: [2, "نام شهر حداقل ۲ کاراکتر باید باشد"],
      maxlength: [50, "نام شهر حداکثر ۵۰ کاراکتر باید باشد"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "توضیحات حداکثر ۵۰۰ کاراکتر باید باشد"],
    },
    status: {
      type: String,
      enum: {
        values: ["active", "inactive", "pending"],
        message: "وضعیت باید active، inactive یا pending باشد",
      },
      default: "pending",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    commission: {
      type: Number,
      default: 10,
      min: [0, "کمیسیون نمیتواند منفی باشد"],
      max: [100, "کمیسیون نمیتواند بیشتر از ۱۰۰ درصد باشد"],
    },
  },
  {
    timestamps: true,
  }
);


const Seller: Model<ISeller> =
  mongoose.models.Seller || mongoose.model<ISeller>("Seller", sellerSchema);

export default Seller;