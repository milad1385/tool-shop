import { auth } from "@/auth";
import connectDB from "@/configs/db";
import { IGetUserOrder, IGetUserOrders, IUserOrders } from "@/libs/types";
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

export const getUserOrder = async ({
  id,
}: IGetUserOrder): Promise<IUserOrders> => {
  try {
    await connectDB();

    const session = await auth();
    if (!session?.user) {
      throw new Error("Please login");
    }

    const order = await Order.findOne({ user: session.user.id, _id: id })
      .populate({
        path: "items.product",
        select: "name slug images category",
        populate: {
          path: "category",
          select: "name href",
        },
      })
      .populate("items.seller", "city name description")
      .sort({ createdAt: -1 });

    return normalizeData(order);
  } catch (error) {
    throw new Error(error?.message);
  }
};
