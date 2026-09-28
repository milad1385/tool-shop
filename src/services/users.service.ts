import { auth } from "@/auth";
import connectToDB from "@/configs/db";
import { IGetUserPanelStats } from "@/libs/types";
import Order from "@/models/Order";
import User from "@/models/User";
import { normalizeData } from "@/utils/helper";

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

export const getAllUsers = async (numQuery: string) => {
  try {
    let filterByDate = {};

    if (numQuery) {
      const start = new Date(numQuery);
      const end = new Date();
      filterByDate = {
        createdAt: {
          $gte: start,
          $lte: end,
        },
      };
    }
    await connectToDB();

    const latestUsers = await User.find(
      filterByDate,
      "fullname email username createdAt phone",
    )
      .limit(10)
      .sort({ createdAt: -1 });

    return normalizeData(latestUsers);
  } catch (error) {
    throw new Error(error?.message);
  }
};
