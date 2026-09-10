import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import { normalizeData } from "@/utils/helper";
import { createPagination } from "@/utils/helper";
import { IGetProducts, IPaginatedResponse, IProduct } from "@/libs/types";

export const getProducts = async ({
  page = 1,
  limit = 10,
  search = "",
  status = "ALL",
}: IGetProducts = {}): Promise<IPaginatedResponse<IProduct>> => {
  try {
    await connectToDB();

    let filters: any = {};

    if (search) {
      filters.$or = [
        { name: { $regex: search, $options: "i" } },
        { slug: { $regex: search, $options: "i" } },
        { shortIdentifier: { $regex: search, $options: "i" } },
      ];
    }

    if (status !== "ALL") {
      filters.status = status;
    }

    const count = await Product.countDocuments(filters);

    const products = await Product.find(filters)
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({
        createdAt: -1,
      });

    return {
      data: normalizeData(products),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
