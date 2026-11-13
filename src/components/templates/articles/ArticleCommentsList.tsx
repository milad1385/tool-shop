import EmptyState from "@/components/modules/main/EmptyState";
import { getArticleComments } from "@/services/articleComment.service";
import { FaComment } from "react-icons/fa";
import ArticleCommentsClient from "./ArticleCommentsClient";

const PAGE_SIZE = 10;

async function ArticleCommentsList({ link }: { link: string }) {
  const { comments, total } = await getArticleComments({
    articleLink: link,
    page: 1,
    limit: PAGE_SIZE,
  });

  if (comments.length === 0) {
    return (
      <EmptyState
        actionText="بازگشت به مقالات"
        actionLink="/blog"
        description="هیچ کامنتی تاکنون برای این مقاله ثبت نشده است."
        icon={<FaComment className="text-base md:text-2xl" />}
      />
    );
  }

  return (
    <>
      <h3 className="font-Lalezar text-2xl my-5">نظرات کاربران</h3>
      <ArticleCommentsClient
        link={link}
        initialComments={comments}
        total={total}
        pageSize={PAGE_SIZE}
      />
    </>
  );
}

export default ArticleCommentsList;
