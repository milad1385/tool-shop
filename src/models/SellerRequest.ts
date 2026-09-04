import mongoose, { Schema, Model, Document } from "mongoose";

export type SellerRequestStatus = "pending" | "accepted" | "rejected";

export interface ISellerRequest extends Document {
  seller: mongoose.Types.ObjectId;
  product: mongoose.Types.ObjectId;
  price: number;
  stock: number;
  discount: number;
  status: SellerRequestStatus;
  adminComment?: string;
  priority: 1 | 2 | 3;
  expiresAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const sellerRequestSchema = new Schema<ISellerRequest>(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: [true, "فروشنده الزامی است"],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "محصول الزامی است"],
    },
    price: {
      type: Number,
      required: [true, "قیمت الزامی است"],
      min: [0, "قیمت نمیتواند منفی باشد"],
    },
    stock: {
      type: Number,
      required: [true, "موجودی الزامی است"],
      default: 0,
      min: [0, "موجودی نمیتواند منفی باشد"],
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, "تخفیف نمیتواند منفی باشد"],
      max: [100, "تخفیف نمیتواند بیشتر از ۱۰۰ درصد باشد"],
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
      required: [true, "وضعیت الزامی است"],
    },
    adminComment: {
      type: String,
      trim: true,
      maxlength: [500, "نظر ادمین حداکثر ۵۰۰ کاراکتر باید باشد"],
    },
    priority: {
      type: Number,
      enum: [1, 2, 3],
      default: 3,
      required: [true, "اولویت الزامی است"],
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  },
  {
    timestamps: true,
  },
);

sellerRequestSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const SellerRequest: Model<ISellerRequest> =
  mongoose.models.SellerRequest ||
  mongoose.model<ISellerRequest>("SellerRequest", sellerRequestSchema);

export default SellerRequest;
