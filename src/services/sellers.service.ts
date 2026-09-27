import connectToDB from "@/configs/db";
import { IGetSeller, IPaginatedResponse, ISeller } from "@/libs/types";
import Seller from "@/models/Seller";
import { createPagination, normalizeData } from "@/utils/helper";

export const getAllSellers = async () => {
  try {
    await connectToDB();
    const sellers = await Seller.find({}).populate(
      "user",
      "username fullname phone email",
    );

    return normalizeData(sellers);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSellers = async ({
  page = 1,
  limit = 10,
  isVerified,
}: IGetSeller): Promise<IPaginatedResponse<ISeller>> => {
  try {
    await connectToDB();

    const filters: any = {};
    if (isVerified) {
      filters.verified = true;
    }

    const count = await Seller.countDocuments(filters);
    const sellers = await Seller.find(filters)
      .populate("user", "fullname username  email phone")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    return {
      data: normalizeData(sellers),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error) {
    throw new Error(error?.message);
  }
};
