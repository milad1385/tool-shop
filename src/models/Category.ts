// models/Category.ts
import mongoose, { Schema, Model, Document } from "mongoose";

// ============ تایپ فیلترها ============
export type FilterType = "selectbox" | "radio" | "checkbox";

export interface IFilterOption {
  name: string;
  slug: string;
  type: FilterType;
  options?: string[];
  description?: string;
}

export interface ICategory extends Document {
  name: string;
  href: string;
  desc: string;
  parent?: mongoose.Types.ObjectId | null;
  tags: string[];
  image: string;
  filters?: IFilterOption[];
  createdAt?: Date;
  updatedAt?: Date;
}

const FilterOptionSchema = new Schema<IFilterOption>({
  name: {
    type: String,
    required: [true, "نام فیلتر الزامی است"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "اسلاگ فیلتر الزامی است"],
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9\-]+$/, "اسلاگ فقط می‌تواند شامل حروف کوچک، اعداد و خط تیره باشد"],
  },
  type: {
    type: String,
    enum: {
      values: ["selectbox", "radio", "checkbox"],
      message: "نوع فیلتر باید selectbox، radio یا checkbox باشد",
    },
    required: [true, "نوع فیلتر الزامی است"],
  },
  options: {
    type: [String],
    default: undefined,
    validate: {
      validator: function (options: string[]) {
        if (!options) return true;
        return Array.isArray(options) && options.every((opt) => opt.trim() !== "");
      },
      message: "گزینه‌ها باید آرایه‌ای از رشته‌های غیر خالی باشند",
    },
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, "توضیحات فیلتر حداکثر ۵۰۰ کاراکتر باید باشد"],
  },
});

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, "نام دسته بندی الزامی است"],
      trim: true,
      unique: true,
      minlength: [3, "نام دسته بندی حداقل ۳ کاراکتر باید باشد"],
      maxlength: [100, "نام دسته بندی حداکثر ۱۰۰ کاراکتر باید باشد"],
    },
    href: {
      type: String,
      required: [true, "لینک دسته بندی الزامی است"],
      trim: true,
      unique: true,
      minlength: [3, "لینک دسته بندی حداقل ۳ کاراکتر باید باشد"],
      maxlength: [100, "لینک دسته بندی حداکثر ۱۰۰ کاراکتر باید باشد"],
    },
    desc: {
      type: String,
      required: [true, "توضیحات دسته بندی الزامی است"],
      trim: true,
      minlength: [10, "توضیحات حداقل ۱۰ کاراکتر باید باشد"],
      maxlength: [1000, "توضیحات حداکثر ۱۰۰۰ کاراکتر باید باشد"],
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    tags: {
      type: [String],
      required: [true, "حداقل یک تگ الزامی است"],
      validate: {
        validator: function (tags: string[]) {
          return tags.length > 0 && tags.every((tag) => tag.trim() !== "");
        },
        message: "حداقل یک تگ معتبر وارد کنید",
      },
    },
    image: {
      type: String,
      required: [true, "آیکون دسته بندی الزامی است"],
    },
    filters: {
      type: [FilterOptionSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Category: Model<ICategory> =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", categorySchema);

export default Category;