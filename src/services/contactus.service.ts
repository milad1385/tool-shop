import connectToDB from "@/configs/db";
import { IContactUs, IGetContacts, IPaginatedResponse } from "@/libs/types";
import ContactUs from "@/models/ContactUs";
import { createPagination, normalizeData } from "@/utils/helper";

export const getContacts = async ({
  page = 1,
  limit = 10,
  search = "",
  status = "ALL",
}: IGetContacts = {}): Promise<IPaginatedResponse<IContactUs>> => {
  try {
    await connectToDB();

    let filters: any = {};

    if (search) {
      filters.$or = [
        { fullname: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    if (status !== "ALL") {
      filters.status = status;
    }

    const count = await ContactUs.countDocuments(filters);

    const contacts = await ContactUs.find(filters)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({
        createdAt: -1,
      });

    return {
      data: normalizeData(contacts),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
