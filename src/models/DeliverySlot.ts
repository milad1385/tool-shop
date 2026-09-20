import mongoose, { Schema, Model, Document } from "mongoose";

export interface IDeliverySlot extends Document {
  dayOfWeek: number;
  startHour: number;
  endHour: number;
  maxCapacity: number;
  usedCapacity: number;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const deliverySlotSchema = new Schema<IDeliverySlot>(
  {
    dayOfWeek: {
      type: Number,
      required: true,
      min: 0,
      max: 6,
    },
    startHour: {
      type: Number,
      required: true,
      min: 0,
      max: 23,
    },
    endHour: {
      type: Number,
      required: true,
      min: 0,
      max: 23,
    },
    maxCapacity: {
      type: Number,
      required: true,
      default: 10,
      min: 1,
    },
    usedCapacity: {
      type: Number,
      default: 0,
      min: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

deliverySlotSchema.index(
  { dayOfWeek: 1, startHour: 1, endHour: 1 },
  { unique: true },
);

const DeliverySlot: Model<IDeliverySlot> =
  mongoose.models.DeliverySlot ||
  mongoose.model<IDeliverySlot>("DeliverySlot", deliverySlotSchema);

export default DeliverySlot;
