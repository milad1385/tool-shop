import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IComparison extends Document {
  user: Types.ObjectId;
  product: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ComparisonSchema = new Schema<IComparison>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

ComparisonSchema.index({ user: 1, product: 1 }, { unique: true });

const Comparison: Model<IComparison> =
  mongoose.models.Comparison ||
  mongoose.model<IComparison>("Comparison", ComparisonSchema);

export default Comparison;
