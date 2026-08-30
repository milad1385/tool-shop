import mongoose, { Schema, Model, Document } from "mongoose";

export interface ISlider extends Document {
  title: string;
  href: string;
  priority: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const sliderSchema = new Schema<ISlider>(
  {
    title: {
      type: String,
      required: [true, "عنوان اسلایدر بندی الزامی است"],
      trim: true,
      unique: true,
      minlength: [3, "عنوان اسلایدر بندی حداقل ۳ کاراکتر باید باشد"],
      maxlength: [100, "عنوان اسلایدر بندی حداکثر ۱۰۰ کاراکتر باید باشد"],
    },
    href: {
      type: String,
      required: [true, "لینک اسلایدر الزامی است"],
      trim: true,
      unique: true,
      minlength: [3, "لینک اسلایدر حداقل ۳ کاراکتر باید باشد"],
      maxlength: [100, "لینک اسلایدر حداکثر ۱۰۰ کاراکتر باید باشد"],
    },
    priority: {
      type: Number,
      required: [true, "اولویت اسلایدر الزامی است"],
      enum: [1, 2, 3],
      default: 3,
    },
    image: {
      type: String,
      required: [true, "تصویر اسلایدر الزامی است"],
    },
  },
  { timestamps: true },
);

const Slider: Model<ISlider> =
  mongoose.models.Slider || mongoose.model<ISlider>("Slider", sliderSchema);

export default Slider;
