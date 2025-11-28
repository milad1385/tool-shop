import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CreateProductFeature from "@/components/templates/p-admin/CreateProductFeature";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد ویژگی محصول" />
      <CreateProductFeature />
    </Container>
  );
}

export default page;
