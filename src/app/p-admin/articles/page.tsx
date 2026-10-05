import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import ArticleList from "@/components/templates/p-admin/articles/ArticleList";
import { articleFilter } from "@/constants/data";
import PageTitle from "../../../components/modules/p-admin/PageTitle";
import CreateNewArticle from "@/components/templates/p-admin/articles/CreateNewArticle";
import { getAllCategories } from "@/services/categories.service";
import { IPage } from "@/libs/types";
import { getAllArticles } from "@/services/article.service";

async function page({ searchParams }: IPage) {
  const { page, limit, q, status } = await searchParams;
  const [categories, { data, pagination }] = await Promise.all([
    getAllCategories(),
    getAllArticles({
      page: +page || 1,
      limit: +limit || 10,
      status: status || "all",
      search: q,
    }),
  ]);

  return (
    <Container>
      <PageTitle content="ایجاد مقاله" />
      <CreateNewArticle categories={categories} />
      <TableOperation pageTitle="لیست مقاله ها" options={articleFilter} />
      <ArticleList data={data} pagination={pagination} />
    </Container>
  );
}

export default page;
