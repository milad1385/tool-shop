import mongoose, { Schema, Model, Document } from "mongoose";

export interface IContactUs extends Document {
  email: string;
  fullname: string;
  message: string;
  status: "ANSWERED" | "PENDING";
  createdAt?: Date;
  updatedAt?: Date;
}

const contactUsSchema = new Schema<IContactUs>(
  {
    fullname: {
      type: String,
      required: [true, "نام کامل الزامی است"],
      trim: true,
      minlength: [3, "نام کامل حداقل ۳ کاراکتر باید باشد"],
      maxlength: [50, "نام کامل حداکثر ۵۰ کاراکتر باید باشد"],
    },

    email: {
      type: String,
      required: [true, "ایمیل الزامی است"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "ایمیل معتبر نیست",
      ],
    },
    status: {
      type: String,
      enum: ["ANSWERED", "PENDING"],
      default: "PENDING",
    },
  },
  { timestamps: true },
);

const ContactUs: Model<IContactUs> =
  mongoose.models.ContactUs ||
  mongoose.model<IContactUs>("ContactUs", contactUsSchema);

export default ContactUs;
