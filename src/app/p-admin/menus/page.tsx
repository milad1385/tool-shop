import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateMenu from "@/components/templates/p-admin/menus/CreateMenu";
import MenuList from "@/components/templates/p-admin/menus/MenuList";
import { MenuFilterOptions } from "@/constants/data";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد منو جدید" />
      <CreateMenu />
      <TableOperation pageTitle="لیست منو ها" options={MenuFilterOptions} />
      <MenuList />
    </Container>
  );
}

export default page;
