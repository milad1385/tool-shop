import { getRelatedArticles } from "@/services/article.service";
import ArticleSectionTitle from "./ArticleSectionTitle";
import RecentArticleBox from "./RecentArticleBox";
import { IRecentArticles } from "@/libs/types";

async function RecentArticles({ articleId }: IRecentArticles) {
  const relatedArticles = await getRelatedArticles(articleId);
  if (!relatedArticles.length) return null;

  return (
    <div className="bg-white p-4 rounded-3xl mb-4 leading-8">
      <ArticleSectionTitle title="مقالات مرتبط" />

      <ul className="space-y-4">
        {relatedArticles.map((recentArticle) => (
          <RecentArticleBox key={recentArticle._id} {...recentArticle} />
        ))}
      </ul>
    </div>
  );
}

export default RecentArticles;
