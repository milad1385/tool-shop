import mongoose, { Schema, Model, Document } from "mongoose";
import "@/models/Seller";

export interface IQuestion {
  question: string;
  answer: string;
  order: number;
}

const questionSchema = new Schema<IQuestion>(
  {
    question: {
      type: String,
      required: [true, "وارد کردن صورت سوال الزامی است"],
      trim: true,
    },
    answer: {
      type: String,
      required: [true, "وارد کردن جواب سوال الزامی است"],
      trim: true,
    },
    order: {
      type: Number,
      required: [true, "وارد کردن شماره اولویت سوال الزامی است"],
    },
  },
  { timestamps: true },
);

const Question: Model<IQuestion> =
  mongoose.models.Question ||
  mongoose.model<IQuestion>("Question", questionSchema);

export default Question;
