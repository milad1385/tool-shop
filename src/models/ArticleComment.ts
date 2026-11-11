import mongoose, { Schema, Model, Document } from "mongoose";
import "@/models/Article";
import "@/models/User";

export interface IArticleComment extends Document {
  comment: string;
  article: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  status: "accept" | "pending" | "reject";
  createdAt?: Date;
  updatedAt?: Date;
}

const articleCommentSchema = new Schema<IArticleComment>(
  {
    comment: {
      type: String,
      required: [true, "متن الزامی است"],
      trim: true,
      minlength: [3, "متن باید حداقل ۳ کاراکتر باشد"],
      maxlength: [1000, "متن نباید بیشتر از 1000 کاراکتر باشد"],
    },

    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: [true, "مقاله است"],
    },

    status: {
      type: String,
      enum: {
        values: ["accept", "pending", "reject"],
        message: "وضعیت باید accept یا reject باشد",
      },
      default: "pending",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const ArticleComment: Model<IArticleComment> =
  mongoose.models?.ArticleComment ||
  mongoose.model<IArticleComment>("ArticleComment", articleCommentSchema);

export default ArticleComment;
