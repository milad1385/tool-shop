"use client";

import { useState, useTransition } from "react";

import type { IArticleComment, IArticleCommentsClient } from "@/libs/types";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { fetchMoreCommentsAction } from "@/libs/actions/articleComment.action";
import ArticleCommentItem from "./ArticleCommentItem";
import Button from "@/components/ui/Button";

function ArticleCommentsClient({
  link,
  initialComments,
  total,
  pageSize,
}: IArticleCommentsClient) {
  const [comments, setComments] = useState<IArticleComment[]>(initialComments);
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  const hasMore = comments.length < total;

  const loadMore = () => {
    startTransition(async () => {
      const nextPage = page + 1;
      const res = await fetchMoreCommentsAction(link, nextPage, pageSize);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      setComments((prev) => {
        const ids = new Set(prev.map((c) => c._id));
        const newItems = res.comments.filter((c) => !ids.has(c._id));
        return [...prev, ...newItems];
      });
      setPage(nextPage);
    });
  };

  return (
    <div className="p-2 space-y-5">
      {comments.map((comment) => (
        <ArticleCommentItem
          comment={comment.comment}
          user={comment.user}
          createdAt={comment.createdAt}
          key={comment._id}
        />
      ))}

      {hasMore && (
        <Button
          onClick={loadMore}
          disabled={isPending}
          className="flex-center !w-[150px] !h-[45px] !mx-auto !mt-10"
        >
          {isPending ? (
            <FaSpinner className="animate-spin h-4 w-4" />
          ) : (
            "نمایش بیشتر"
          )}
        </Button>
      )}

      {!hasMore && comments.length > 0 && (
        <p className="text-center text-sm text-gray-400 pt-4">
          همه‌ی نظرات نمایش داده شد
        </p>
      )}
    </div>
  );
}

export default ArticleCommentsClient;
