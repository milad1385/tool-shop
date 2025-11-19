import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CreateNewProductDetails from "@/components/templates/p-admin/CreateNewProductDetails";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد جزییات محصول" />
      <CreateNewProductDetails />
    </Container>
  );
}

export default page;
