import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import ArticleCommentList from "@/components/templates/p-admin/article-comments/ArticleCommentList";
import { statusFilterOptions } from "@/constants/data";
import { IPage } from "@/libs/types";
import { getAllArticleComments } from "@/services/articleComment.service";

async function page({ searchParams }: IPage) {
  const { page, limit, status, q } = await searchParams;
  const { data, pagination } = await getAllArticleComments({
    page: +page || 1,
    limit: +limit || 10,
    search: q || "",
    status: status || "all",
  });
  return (
    <Container>
      <TableOperation
        options={statusFilterOptions}
        pageTitle="لیست کامنت مقالات"
      />
      <ArticleCommentList data={data} pagination={pagination} />
    </Container>
  );
}

export default page;
