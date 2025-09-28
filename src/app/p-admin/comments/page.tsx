import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CommentList from "@/components/templates/p-admin/CommentList";
import { CommentFilterOptions } from "@/constants/data";
import React from "react";

function page() {
  return (
    <Container>
      <TableOperation
        options={CommentFilterOptions}
        pageTitle="لیست کامنت ها"
      />
      <CommentList />
    </Container>
  );
}

export default page;
