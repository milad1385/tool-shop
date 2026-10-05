import mongoose, { Schema, Model, Document } from "mongoose";
import "@/models/Category";
import "@/models/User";

export interface IArticle extends Document {
  title: string;
  link: string;
  tags: string[];
  readingTime: string;
  shortDescription: string;
  content: string;
  category: mongoose.Types.ObjectId;
  image: string;
  status: "published" | "draft";
  author?: mongoose.Types.ObjectId;
  views: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const articleSchema = new Schema<IArticle>(
  {
    title: {
      type: String,
      required: [true, "عنوان مقاله الزامی است"],
      trim: true,
      minlength: [3, "عنوان باید حداقل ۳ کاراکتر باشد"],
      maxlength: [200, "عنوان نباید بیشتر از ۲۰۰ کاراکتر باشد"],
    },

    link: {
      type: String,
      required: [true, "لینک مقاله الزامی است"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "لینک باید فقط شامل حروف کوچک انگلیسی، اعداد و خط تیره باشد",
      ],
    },

    tags: {
      type: [String],
      default: [],
      validate: {
        validator: (tags: string[]) => tags.length > 0,
        message: "حداقل یک تگ الزامی است",
      },
    },

    readingTime: {
      type: String,
      required: [true, "مدت زمان خواندن الزامی است"],
      trim: true,
      match: [/^\d+\s*دقیقه$/, "مدت زمان باید به صورت عدد + دقیقه باشد"],
    },

    shortDescription: {
      type: String,
      required: [true, "توضیحات کوتاه الزامی است"],
      trim: true,
      maxlength: [200, "توضیحات کوتاه نباید بیشتر از ۲۰۰ کاراکتر باشد"],
    },

    content: {
      type: String,
      required: [true, "محتوای مقاله الزامی است"],
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "دسته‌بندی الزامی است"],
    },

    image: {
      type: String,
      required: [true, "کاور مقاله الزامی است"],
      trim: true,
    },

    status: {
      type: String,
      enum: {
        values: ["published", "draft"],
        message: "وضعیت باید published یا draft باشد",
      },
      default: "published",
      index: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    views: {
      type: Number,
      default: 0,
      min: [0, "تعداد بازدید نمی‌تواند منفی باشد"],
    },
  },
  {
    timestamps: true,
  },
);

const Article: Model<IArticle> =
  mongoose.models?.Article ||
  mongoose.model<IArticle>("Article", articleSchema);

export default Article;
