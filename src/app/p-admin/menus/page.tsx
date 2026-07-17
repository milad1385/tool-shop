import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CreateMenu from "@/components/templates/p-admin/menus/CreateMenu";
import MenuList from "@/components/templates/p-admin/menus/MenuList";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد منو جدید" />
      <CreateMenu />
      <MenuList />
    </Container>
  );
}

export default page;
