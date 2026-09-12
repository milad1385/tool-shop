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

export const getAmazingOffers = async (
  limit: number = 8,
): Promise<IProduct[]> => {
  try {
    await connectToDB();
    const products = await Product.find({
      isAmazingOffer: true,
      status: "active",
    })
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return normalizeData(products) as IProduct[];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getFeaturedProducts = async (
  limit: number = 10,
): Promise<IProduct[]> => {
  try {
    await connectToDB();
    const products = await Product.find({
      isFeatured: true,
      status: "active",
    })
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return normalizeData(products) as IProduct[];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllProducts = async (
  limit: number = 10,
): Promise<IProduct[]> => {
  try {
    await connectToDB();
    const products = await Product.find({
      status: "active",
    })
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return normalizeData(products) as IProduct[];
  } catch (error) {
    throw new Error(error.message);
  }
};
