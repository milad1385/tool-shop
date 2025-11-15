import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CreateMenu from "@/components/templates/p-admin/CreateMenu";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد منو جدید" />
      <CreateMenu />
    </Container>
  );
}

export default page;
