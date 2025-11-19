import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateNewProductDetails from "@/components/templates/p-admin/CreateNewProductDetails";
import ProductDetailList from "@/components/templates/p-admin/ProductDetailList";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد جزییات محصول" />
      <CreateNewProductDetails />
      <TableOperation pageTitle="لیست ویژگی ها" />
      <ProductDetailList />
    </Container>
  );
}

export default page;
