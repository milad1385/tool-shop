import connectToDB from "@/configs/db";
import {
  IArticleComment,
  IGetAllArticleComments,
  IPaginatedResponse,
} from "@/libs/types";
import Article from "@/models/Article";
import ArticleComment from "@/models/ArticleComment";
import { createPagination, normalizeData } from "@/utils/helper";

export const getArticleComments = async (articleLink: string) => {
  try {
    await connectToDB();

    const article = await Article.findOne({ link: articleLink });
    if (!article) {
      return false;
    }

    const comments = await ArticleComment.find({
      status: "accept",
      article: article._id,
    }).populate("user", "username roles fullname image");

    return normalizeData(comments);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getAllArticleComments = async ({
  page = 1,
  limit = 10,
  search = "",
  status,
}: IGetAllArticleComments = {}): Promise<
  IPaginatedResponse<IArticleComment>
> => {
  try {
    await connectToDB();
    let filters: any = {};

    const count = await ArticleComment.countDocuments({});

    if (search) {
      filters.comment = { $regex: search };
    }

    if (status !== "all") {
      filters.status = status;
    }
    const articleComments = await ArticleComment.find(filters)
      .populate("user")
      .populate("article")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });
    console.log("58 => ", articleComments);

    return {
      data: normalizeData(articleComments),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
