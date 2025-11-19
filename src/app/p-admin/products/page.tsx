import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CreateNewProduct from "@/components/templates/p-admin/CreateNewProduct";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد محصول جدید" />
      <CreateNewProduct/>
    </Container>
  );
}

export default page;
