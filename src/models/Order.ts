import mongoose, { Schema, Model, Document } from "mongoose";
import "@/models/Product";
import "@/models/Seller";
import "@/models/User";

export interface IOrderItem {
  _id?: mongoose.Types.ObjectId;
  product: mongoose.Types.ObjectId;
  seller: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
  discount: number;
  finalPrice: number;
}

export interface IOrderAddress {
  name: string;
  mobile: string;
  postalCode: string;
  location: {
    lat: number;
    lan: number;
  };
  address: string;
  houseNumber: string;
  unit: string;
}

export interface IOrderDeliverySlot {
  dayOfWeek: number;
  startHour: number;
  endHour: number;
  slot:mongoose.Types.ObjectId
}

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  items: IOrderItem[];
  address: IOrderAddress;
  deliverySlot: IOrderDeliverySlot;
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;
  finalPrice: number;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  paymentMethod?: "online" | "cash";
  paymentStatus: "unpaid" | "paid" | "failed";
  orderNumber: string;
  trackingCode?: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const orderItemSchema = new Schema<IOrderItem>(
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
    },
    price: {
      type: Number,
      required: [true, "قیمت الزامی است"],
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    finalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: true },
);

const orderAddressSchema = new Schema<IOrderAddress>(
  {
    name: {
      type: String,
      required: [true, "نام الزامی است"],
      trim: true,
    },
    mobile: {
      type: String,
      required: [true, "شماره همراه الزامی است"],
      trim: true,
      match: [/^09[0-9]{9}$/, "شماره همراه معتبر نیست"],
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
      },
      lan: {
        type: Number,
        required: [true, "عرض جغرافیایی الزامی است"],
      },
    },
    address: {
      type: String,
      required: [true, "آدرس الزامی است"],
      trim: true,
    },
    houseNumber: {
      type: String,
      required: true,
      trim: true,
    },
    unit: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const orderDeliverySlotSchema = new Schema<IOrderDeliverySlot>(
  {
    slot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliverySlot",
      required: [true, "شناسه اسلات الزامی است"],
    },
    dayOfWeek: {
      type: Number,
      required: [true, "روز هفته الزامی است"],
      min: 0,
      max: 6,
    },
    startHour: {
      type: Number,
      required: [true, "ساعت شروع الزامی است"],
      min: 0,
      max: 23,
    },
    endHour: {
      type: Number,
      required: [true, "ساعت پایان الزامی است"],
      min: 0,
      max: 23,
    },
  },
  { _id: false },
);

const orderSchema = new Schema<IOrder>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "کاربر الزامی است"],
      index: true,
    },
    items: {
      type: [orderItemSchema],
      required: [true, "آیتم‌های سفارش الزامی است"],
      validate: {
        validator: (items: IOrderItem[]) => items.length > 0,
        message: "حداقل یک آیتم باید وجود داشته باشد",
      },
    },
    address: {
      type: orderAddressSchema,
      required: [true, "آدرس الزامی است"],
    },
    deliverySlot: {
      type: orderDeliverySlotSchema,
      required: [true, "زمان ارسال الزامی است"],
    },
    totalItems: {
      type: Number,
      required: true,
      min: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    totalDiscount: {
      type: Number,
      required: true,
      min: 0,
    },
    finalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
      index: true,
    },
    paymentMethod: {
      type: String,
      enum: ["online", "cash"],
      default: "online",
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "failed"],
      default: "unpaid",
    },
    orderNumber: {
      type: String,
      required: [true, "شماره سفارش الزامی است"],
      unique: true,
    },
    trackingCode: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  { timestamps: true },
);

const Order: Model<IOrder> =
  mongoose.models?.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
