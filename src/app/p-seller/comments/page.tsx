import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CommentList from "@/components/templates/p-admin/comments/CommentList";
import { statusFilterOptions } from "@/constants/data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "کامنت ها",
};

function page() {
  return (
    <Container>
      <TableOperation options={statusFilterOptions} pageTitle="لیست کامنت ها" />
      <CommentList />
    </Container>
  );
}

export default page;
