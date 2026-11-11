import { getArticleComments } from "@/services/articleComment.service";
import ArticleCommentItem from "./ArticleCommentItem";
import EmptyState from "@/components/modules/main/EmptyState";
import { FaComment } from "react-icons/fa";

async function ArticleCommentsList({ link }: { link: string }) {
  const comments = await getArticleComments(link);

  return comments?.length > 0 ? (
    <>
      <h3 className="font-Lalezar text-2xl my-5">نظرات کاربران</h3>
      <div className="p-2 space-y-5">
        {comments.map((comment) => (
          <ArticleCommentItem key={comment._id} {...comment} />
        ))}
      </div>
    </>
  ) : (
    <EmptyState
      actionText="بازگشت به مقالات"
      actionLink="/blog"
      description={`هیچ کامنتی تاکنون برای این مقاله ثبت نشده است.`}
      icon={<FaComment className="text-base md:text-2xl" />}
    />
  );
}

export default ArticleCommentsList;
