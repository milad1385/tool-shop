import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { IArticleList } from "@/libs/types";
import ArticleRow from "./ArticleRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";

function ArticleList({ data, pagination }: IArticleList) {
  return (
    <div className="md:section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>عکس</th>
            <th>عنوان</th>

            <th>تگ ها</th>
            <th>دسته بندی</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
            <th>عملیات</th>
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
