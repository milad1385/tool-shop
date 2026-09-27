import connectToDB from "@/configs/db";
import {
  IGetSeller,
  IGetSellers,
  IPaginatedResponse,
  ISeller,
} from "@/libs/types";
import Seller from "@/models/Seller";
import { createPagination, normalizeData } from "@/utils/helper";
import { isValidObjectId } from "mongoose";

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
}: IGetSellers): Promise<IPaginatedResponse<ISeller>> => {
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

export const getSeller = async ({ id }: IGetSeller): Promise<ISeller> => {
  try {
    await connectToDB();
    if (!isValidObjectId(id)) {
      throw new Error("Please send valid object id");
    }

    const seller = await Seller.findOne({ verified: true, _id: id })
      .populate("user", "fullname username  email phone")
      .lean();

    return normalizeData(seller);
  } catch (error) {
    throw new Error(error?.message);
  }
};
