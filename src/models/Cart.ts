import mongoose, { Schema, Model, Document } from "mongoose";
import "@/models/Seller";
import "@/models/Product";

export interface ICartItem {
  product: mongoose.Types.ObjectId;
  seller: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
  discount: number;
  finalPrice: number;
  addedAt: Date;
  _id?: mongoose.Types.ObjectId;
}

export interface ICart extends Document {
  user: mongoose.Types.ObjectId;
  items: ICartItem[];
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;
  finalPrice: number;
  recalculate(): this;
  createdAt?: Date;
  updatedAt?: Date;
}

const cartItemSchema = new Schema<ICartItem>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "محصول الزامی است"],
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: [true, "فروشنده الزامی است"],
    },
    quantity: {
      type: Number,
      required: [true, "تعداد الزامی است"],
      min: [1, "تعداد حداقل ۱ است"],
      max: [100, "تعداد حداکثر ۱۰۰ است"],
    },
    price: {
      type: Number,
      required: [true, "قیمت الزامی است"],
      min: [0, "قیمت نمیتواند منفی باشد"],
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, "تخفیف نمیتواند منفی باشد"],
      max: [100, "تخفیف حداکثر ۱۰۰ است"],
    },
    finalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    addedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: true },
);

const cartSchema = new Schema<ICart>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "کاربر الزامی است"],
      unique: true,
      index: true,
    },
    items: {
      type: [cartItemSchema],
      default: [],
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    totalDiscount: {
      type: Number,
      default: 0,
    },
    finalPrice: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

cartSchema.methods.recalculate = function () {
  this.totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);

  this.totalPrice = this.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  this.totalDiscount = this.items.reduce(
    (sum, item) => sum + (item.price * item.discount * item.quantity) / 100,
    0,
  );

  this.finalPrice = this.totalPrice - this.totalDiscount;

  return this;
};

cartSchema.pre("save", function (next) {
  this.recalculate();
  next();
});

const Cart: Model<ICart> =
  mongoose.models.Cart || mongoose.model<ICart>("Cart", cartSchema);

export default Cart;
