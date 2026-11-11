"use client";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import ArticleCommentRow from "./ArticleCommentRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { articleCommentsTableHeader } from "@/constants/data";
import { useOptimistic } from "react";
import { IArticleComment, IArticleCommentList } from "@/libs/types";
import { useAuthStore } from "@/stores/auth.store";

function ArticleCommentList({ data, pagination }: IArticleCommentList) {
  const { user } = useAuthStore();
  const [optimisticArticleComment, deleteOptimistc] = useOptimistic(
    data,
    (allComments, id) => {
      return allComments.filter((cat: IArticleComment) => cat._id !== id);
    },
  );
  return (
    <div className="md:section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {articleCommentsTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>

          <Table.Body>
            {optimisticArticleComment.map((comment, index) => (
              <ArticleCommentRow
                index={index + 1}
                key={comment._id}
                {...comment}
                onDelete={deleteOptimistc}
                roles={user?.roles}
              />
            ))}
          </Table.Body>
        </Table>
        {!data.length && <EmptyError />}
        {data.length && <Pagination count={pagination.totalPages} />}
      </div>
    </div>
  );
}

export default ArticleCommentList;
