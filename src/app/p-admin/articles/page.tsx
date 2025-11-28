import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import ArticleList from "@/components/templates/p-admin/ArticleList";
import { articleFilter } from "@/constants/data";
import React from "react";

function page() {
  return (
    <Container>
      <TableOperation pageTitle="لیست مقاله ها" options={articleFilter} />
      <ArticleList />
    </Container>
  );
}

export default page;
