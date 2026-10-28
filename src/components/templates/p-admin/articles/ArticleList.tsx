"use client";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { IArticle, IArticleList } from "@/libs/types";
import ArticleRow from "./ArticleRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { articlesTableHeader } from "@/constants/data";
import { useOptimistic } from "react";

function ArticleList({ data, pagination }: IArticleList) {
  const [optimisticArticles, deleteOptimistc] = useOptimistic(
    data,
    (allArticles, id) => {
      return allArticles.filter((article: IArticle) => article._id !== id);
    },
  );
  return (
    <div className="md:section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {articlesTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>
          <Table.Body>
            {optimisticArticles.map((article, index) => (
              <ArticleRow
                index={index + 1}
                onDelete={deleteOptimistc}
                {...article}
                key={article._id}
              />
            ))}
          </Table.Body>
        </Table>
        {!data.length && <EmptyError />}
        {data.length > 0 && <Pagination count={pagination.totalPages} />}
      </div>
    </div>
  );
}

export default ArticleList;
