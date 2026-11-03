import connectToDB from "@/configs/db";
import { IArticle, IGetAllArticles, IPaginatedResponse } from "@/libs/types";
import Article from "@/models/Article";
import { createPagination, normalizeData } from "@/utils/helper";
import { isValidObjectId } from "mongoose";

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

export const getArticles = async (): Promise<IArticle[]> => {
  try {
    await connectToDB();

    const articles = await Article.find({ status: "published" })
      .populate("author", "fullname image username")
      .sort({ createdAt: -1 })
      .lean();

    return normalizeData(articles);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getArticle = async (link: string): Promise<IArticle> => {
  try {
    await connectToDB();

    const articles = await Article.findOne({ status: "published", link })
      .populate("author", "fullname image username")
      .populate("category", "name href")
      .lean();

    return normalizeData(articles);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getRelatedArticles = async (articleId: string) => {
  try {
    if (!isValidObjectId(articleId)) {
      return false;
    }

    const article = await Article.findOne({ _id: articleId });

    if (!article) {
      return false;
    }

    const articles = await Article.find({
      status: "published",
      category: article.category._id,
      _id: { $ne: article._id },
    })
      .populate("author", "fullname image username")
      .populate("category", "name href")
      .lean();

    return normalizeData(articles);
  } catch (error) {
    throw new Error(error?.message);
  }
};
