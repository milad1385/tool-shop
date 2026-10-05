import connectToDB from "@/configs/db";
import { IArticle, IGetAllArticles, IPaginatedResponse } from "@/libs/types";
import Article from "@/models/Article";
import { createPagination, normalizeData } from "@/utils/helper";

export const getAllArticles = async ({
  page = 1,
  limit = 10,
  search = "",
  status = "ALL",
}: IGetAllArticles = {}): Promise<IPaginatedResponse<IArticle>> => {
  try {
    await connectToDB();
    let filters: any = {};

    if (search) {
      filters.$or = [
        { title: { $regex: search, $options: "i" } },
        { link: { $regex: search, $options: "i" } },
        { shortDescription: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }

    if (status !== "all") {
      filters.status = status;
    }

    const count = await Article.countDocuments(filters);

    const articles = await Article.find(filters)
      .populate("author", "fullname email")
      .populate("category", "name href _id")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    return {
      data: normalizeData(articles),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
