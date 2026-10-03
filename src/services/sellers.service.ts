import connectToDB from "@/configs/db";
import { checkAdminAccess } from "@/libs/actions/admin.actions";
import {
  IFindAllSellers,
  IGetSeller,
  IGetSellers,
  IPaginatedResponse,
  ISeller,
} from "@/libs/types";
import Seller from "@/models/Seller";
import { createPagination, normalizeData, toSafeInt } from "@/utils/helper";
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

export const findAllSellers = async ({
  page = 1,
  limit = 10,
  status,
  search = "",
}: IFindAllSellers) => {
  try {
    await connectToDB();

    const adminCheck = await checkAdminAccess();
    if (!adminCheck.success) {
      return { success: false, message: adminCheck.message };
    }

    const safePage = toSafeInt(page, 1);
    const safeLimit = toSafeInt(limit, 10);
    const skip = (safePage - 1) * safeLimit;

    const matchFilters: any = {};

    const words = search.split(/\s+/).filter(Boolean);
    if (words.length > 0) {
      matchFilters.$and = words.map((word) => {
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return {
          $or: [
            { name: { $regex: escaped, $options: "i" } },
            { city: { $regex: escaped, $options: "i" } },
            { description: { $regex: escaped, $options: "i" } },
            { "user.fullname": { $regex: escaped, $options: "i" } },
            { "contactDetails.phone": { $regex: escaped, $options: "i" } },
            { "contactDetails.email": { $regex: escaped, $options: "i" } },
            { "contactDetails.postalCode": { $regex: escaped, $options: "i" } },
          ],
        };
      });
    }

    if (status !== "all") {
      matchFilters.status = status;
    }

    const baseStages = [
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
    ];

    const [sellers, countResult] = await Promise.all([
      Seller.aggregate([
        ...baseStages,
        { $match: matchFilters },
        { $sort: { createdAt: -1 } },
        { $skip: skip },
        { $limit: safeLimit },
      ]),

      Seller.aggregate([
        ...baseStages,
        { $match: matchFilters },
        { $count: "total" },
      ]),
    ]);

    const count = countResult[0]?.total ?? 0;

    return {
      data: normalizeData(sellers),
      pagination: createPagination({
        page: safePage,
        limit: safeLimit,
        count,
      }),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
