import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import ArticleList from "@/components/templates/p-admin/ArticleList";
import { articleFilter } from "@/constants/data";
import PageTitle from "../../../components/modules/p-admin/PageTitle";
import CreateNewArticle from "@/components/templates/p-admin/CreateNewArticle";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد مقاله" />
      <CreateNewArticle />
      <TableOperation pageTitle="لیست مقاله ها" options={articleFilter} />
      <ArticleList />
    </Container>
  );
}

export default page;
