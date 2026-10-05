import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import ArticleList from "@/components/templates/p-admin/articles/ArticleList";
import { articleFilter } from "@/constants/data";
import PageTitle from "../../../components/modules/p-admin/PageTitle";
import CreateNewArticle from "@/components/templates/p-admin/articles/CreateNewArticle";
import { getAllCategories } from "@/services/categories.service";

async function page() {
  const categories = await getAllCategories();
  return (
    <Container>
      <PageTitle content="ایجاد مقاله" />
      <CreateNewArticle categories={categories} />
      <TableOperation pageTitle="لیست مقاله ها" options={articleFilter} />
      <ArticleList />
    </Container>
  );
}

export default page;
