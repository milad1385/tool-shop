import { auth } from "@/auth";
import connectDB from "@/configs/db";
import { IGetUserOrders, IOrders, IUserOrders } from "@/libs/types";
import Order from "@/models/Order";
import { normalizeData } from "@/utils/helper";

export const getUserOrders = async ({
  status,
}: IGetUserOrders): Promise<IUserOrders[]> => {
  try {
    await connectDB();

    const session = await auth();
    if (!session?.user) {
      throw new Error("Please login");
    }

    let filters: any = { user: session.user.id };
    if (status !== "all") {
      filters.status = status;
    }
    const orders = await Order.find({ ...filters })
      .populate("items.product", "name slug images category")
      .populate("items.seller", "city name description")
      .sort({ createdAt: -1 });

    return normalizeData(orders);
  } catch (error) {
    throw new Error(error?.message);
  }
};
