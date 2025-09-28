import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import UserList from "@/components/templates/p-admin/UserList";
import React from "react";

function page() {
  return (
    <Container>
      <TableOperation pageTitle="لیست کاربران" />
      <UserList />
    </Container>
  );
}

export default page;
