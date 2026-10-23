import "@/models/Seller";
import mongoose, { Model, Schema } from "mongoose";

export interface IQuestion {
  question: string;
  answer: string;
  order: number;
  status: "pending" | "reject" | "accept";
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
    status: {
      type: String,
      enum: ["pending", "accept", "reject"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Question: Model<IQuestion> =
  mongoose.models.Question ||
  mongoose.model<IQuestion>("Question", questionSchema);

export default Question;
