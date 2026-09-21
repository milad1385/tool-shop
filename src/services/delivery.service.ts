import connectDB from "@/configs/db";
import DeliverySlot from "@/models/DeliverySlot";
import { normalizeData } from "@/utils/helper";

export const getDeliverySlots = async () => {
  await connectDB();

  const slots = await DeliverySlot.find({ isActive: true })
    .sort({ dayOfWeek: 1, startHour: 1 })
    .lean();

  return normalizeData(slots);
};
