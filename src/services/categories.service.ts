import connectToDB from "@/configs/db";
import { ICategory, IGetCategories, IPaginatedResponse } from "@/libs/types";
import Category from "@/models/Category";
import { createPagination, normalizeData } from "@/utils/helper";

export const getAllCategories = async () => {
  try {
    await connectToDB();
    const categories = await Category.find({ parent: null }).populate("parent");
    return normalizeData(categories);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCategoriesWithPagination = async ({
  page = 1,
  limit = 10,
  search = "",
}: IGetCategories = {}): Promise<IPaginatedResponse<ICategory>> => {
  try {
    await connectToDB();
    let filters: any = {};

    const count = await Category.countDocuments({});

    if (search) {
      filters.name = { $regex: search };
    }
    const categories = await Category.find(filters)
      .populate("parent")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    return {
      data: normalizeData(categories),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
