import { auth } from "@/auth";
import connectDB from "@/configs/db";
import {
  IGetUserOrder,
  IGetUserOrders,
  IPaginatedResponse,
  IUserOrders,
  UserRoleEnums,
} from "@/libs/types";
import Order from "@/models/Order";
import { createPagination, normalizeData } from "@/utils/helper";
import { isValidObjectId } from "mongoose";

export const getUserOrders = async ({
  status,
  isLatest,
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

    const query = Order.find({ ...filters })
      .populate("items.product", "name slug images category")
      .populate("items.seller", "city name description")
      .sort({ createdAt: -1 });

    if (isLatest) {
      query.limit(3);
    }

    const orders = await query;

    return normalizeData(orders);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getUserOrder = async ({
  id,
}: IGetUserOrder): Promise<IUserOrders | null> => {
  try {
    await connectDB();
    if (!isValidObjectId(id)) {
      return null;
    }

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
      .populate("user", "fullname email")
      .sort({ createdAt: -1 });

    return normalizeData(order);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getAllOrders = async ({
  status,
  page = 1,
  limit = 10,
}: IGetUserOrders): Promise<IPaginatedResponse<IUserOrders>> => {
  try {
    await connectDB();

    const session = await auth();
    if (!session?.user) {
      throw new Error("Please login");
    }
    const isAdmin = session.user.roles.some((role: string) =>
      [UserRoleEnums.SUPER_ADMIN, UserRoleEnums.ADMIN].includes(
        role as UserRoleEnums,
      ),
    );

    if (!isAdmin) {
      throw new Error("Access denied !!!");
    }

    let filters: any = {};
    if (status !== "all") {
      filters.status = status;
    }

    const count = await Order.countDocuments(filters);

    const orders = await Order.find({ ...filters })
      .populate("items.product", "name slug images category")
      .populate("items.seller", "city name description")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    return {
      data: normalizeData(orders),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error) {
    throw new Error(error?.message);
  }
};
