import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateProductFeature from "@/components/templates/p-admin/CreateProductFeature";
import ProductFeatureList from "@/components/templates/p-admin/ProductFeatureList";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد ویژگی محصول" />
      <CreateProductFeature />
      <TableOperation pageTitle="لیست ویژگی ها" />
      <ProductFeatureList/>
    </Container>
  );
}

export default page;
