import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { IArticleList } from "@/libs/types";
import ArticleRow from "./ArticleRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { articlesTableHeader } from "@/constants/data";

function ArticleList({ data, pagination }: IArticleList) {
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
            {data.map((article, index) => (
              <ArticleRow index={index + 1} key={article._id} {...article} />
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
