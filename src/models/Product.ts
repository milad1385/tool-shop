import mongoose, { Schema, Model, Document } from "mongoose";

export interface ISeller {
  seller: mongoose.Types.ObjectId;
  price: number;
  discount: number;
  stock: number;
}

export interface IFeature {
  name: string;
  value: string;
  slug: string;
}

export interface ICustomFeature {
  name: string;
  value: string;
  slug: string;
}

export interface IProduct extends Document {
  name: string;
  slug: string;
  sellers: ISeller[];
  images: string[];
  description: string;
  category: mongoose.Types.ObjectId;
  features: IFeature[];
  customFeatures: ICustomFeature[];
  shortIdentifier: string;
  status?: "active" | "inactive" | "draft";
  createdAt?: Date;
  updatedAt?: Date;
}

const SellerSchema = new Schema<ISeller>({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: [true, "فروشنده الزامی است"],
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
    max: [100, "تخفیف نمیتواند بیشتر از ۱۰۰ درصد باشد"],
  },
  stock: {
    type: Number,
    required: [true, "موجودی الزامی است"],
    default: 1,
    min: [0, "موجودی نمیتواند منفی باشد"],
  },
});

const FeatureSchema = new Schema<IFeature>({
  name: {
    type: String,
    required: [true, "نام ویژگی الزامی است"],
    trim: true,
  },
  value: {
    type: String,
    required: [true, "مقدار ویژگی الزامی است"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "اسلاگ ویژگی الزامی است"],
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9\-]+$/, "اسلاگ فقط شامل حروف کوچک، اعداد و خط تیره باشد"],
  },
});

const CustomFeatureSchema = new Schema<ICustomFeature>({
  name: {
    type: String,
    required: [true, "نام ویژگی سفارشی الزامی است"],
    trim: true,
  },
  value: {
    type: String,
    required: [true, "مقدار ویژگی سفارشی الزامی است"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "اسلاگ ویژگی سفارشی الزامی است"],
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9\-]+$/, "اسلاگ فقط شامل حروف کوچک، اعداد و خط تیره باشد"],
  },
});

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "نام محصول الزامی است"],
      trim: true,
      minlength: [3, "نام حداقل ۳ کاراکتر باید باشد"],
      maxlength: [200, "نام حداکثر ۲۰۰ کاراکتر باید باشد"],
    },
    slug: {
      type: String,
      required: [true, "لینک محصول الزامی است"],
      trim: true,
      unique: true,
      minlength: [3, "لینک حداقل ۳ کاراکتر باید باشد"],
      maxlength: [200, "لینک حداکثر ۲۰۰ کاراکتر باید باشد"],
      match: [/^[a-z0-9\-]+$/, "لینک فقط شامل حروف کوچک، اعداد و خط تیره باشد"],
    },
    sellers: {
      type: [SellerSchema],
      default: [],
      validate: {
        validator: function (sellers: ISeller[]) {
          return sellers.length > 0;
        },
        message: "حداقل یک فروشنده باید وجود داشته باشد",
      },
    },
    images: {
      type: [String],
      required: [true, "حداقل یک تصویر الزامی است"],
      validate: {
        validator: function (images: string[]) {
          return images.length > 0;
        },
        message: "حداقل یک تصویر باید آپلود شود",
      },
    },
    description: {
      type: String,
      required: [true, "توضیحات محصول الزامی است"],
      trim: true,
      minlength: [10, "توضیحات حداقل ۱۰ کاراکتر باید باشد"],
      maxlength: [5000, "توضیحات حداکثر ۵۰۰۰ کاراکتر باید باشد"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "دسته بندی الزامی است"],
    },
    features: {
      type: [FeatureSchema],
      default: [],
    },
    customFeatures: {
      type: [CustomFeatureSchema],
      default: [],
    },
    shortIdentifier: {
      type: String,
      required: [true, "شناسه کوتاه الزامی است"],
      unique: true,
      trim: true,
      maxlength: [20, "شناسه کوتاه حداکثر ۲۰ کاراکتر باید باشد"],
    },
    status: {
      type: String,
      enum: {
        values: ["active", "inactive", "draft"],
        message: "وضعیت باید active، inactive یا draft باشد",
      },
      default: "draft",
    },
  },
  {
    timestamps: true,
  },
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
