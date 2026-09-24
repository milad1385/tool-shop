import { auth } from "@/auth";
import connectToDB from "@/configs/db";
import { IGetUserPanelStats } from "@/libs/types";
import Order from "@/models/Order";

export const getUserPanelStats = async (): Promise<IGetUserPanelStats> => {
  try {
    await connectToDB();
    const session = await auth();
    if (!session.user) {
      throw new Error("Please login :)");
    }
    const paidCount = await Order.countDocuments({
      user: session.user.id,
      status: "paid",
    });
    const cancelledCount = await Order.countDocuments({
      user: session.user.id,
      status: "cancelled",
    });

    const pendingCount = await Order.countDocuments({
      user: session.user.id,
      status: "pending",
    });

    return { paidCount, cancelledCount, pendingCount };
  } catch (error) {
    throw new Error(error?.message);
  }
};
