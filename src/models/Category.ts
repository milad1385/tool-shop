import mongoose, { Schema, Model, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  href: string;
  desc: string;
  parent?: mongoose.Types.ObjectId | null;
  tags: string[];
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

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
  },
  { timestamps: true },
);

const Category: Model<ICategory> =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", categorySchema);

export default Category;
