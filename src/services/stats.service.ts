import connectToDB from "@/configs/db";
import Order from "@/models/Order";
import Product from "@/models/Product";
import User from "@/models/User";

export const getAllStats = async (startDate: string) => {
  try {
    await connectToDB();
    let filterByDate = {};

    if (startDate) {
      const start = new Date(startDate);
      const end = new Date();
      filterByDate = {
        createdAt: {
          $gte: start,
          $lte: end,
        },
      };
    }

    const usersCount = await User.countDocuments(filterByDate);
    const productsCount = await Product.countDocuments(filterByDate);

    const orders = await Order.find(filterByDate);
    const sumationOfOrder = orders.reduce(
      (curr, num) => curr + num.totalPrice,
      0,
    );


    return {
      usersCount,
      productsCount,
      ordersCount: orders.length,
      sumationOfOrder,
    };
  } catch (error) {
    throw new Error(error?.message);
  }
};
