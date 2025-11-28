import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import ArticleList from "@/components/templates/p-admin/ArticleList";
import { articleFilter } from "@/constants/data";

function page() {
  return (
    <Container>
      <TableOperation pageTitle="لیست مقاله ها" options={articleFilter} />
      <ArticleList />
    </Container>
  );
}

export default page;
