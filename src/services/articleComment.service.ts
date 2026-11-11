import connectToDB from "@/configs/db";
import Article from "@/models/Article";
import ArticleComment from "@/models/ArticleComment";
import { normalizeData } from "@/utils/helper";

export const getArticleComments = async (articleLink: string) => {
  try {
    await connectToDB();

    const article = await Article.findOne({ link: articleLink });
    if (!article) {
      return false;
    }

    const comments = await ArticleComment.find({
      status: "accepted",
      article: article._id,
    }).populate("user", "username roles fullname image");

    return normalizeData(comments);
  } catch (error) {
    throw new Error(error?.message);
  }
};
