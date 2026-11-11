"use client";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import ArticleCommentRow from "./ArticleCommentRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { articleCommentsTableHeader } from "@/constants/data";

function ArticleCommentList({ data, pagination }) {
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
            {data.map((comment, index) => (
              <ArticleCommentRow
                index={index + 1}
                key={comment._id}
                {...comment}
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
