import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تنظیمات فروشگاه",
};

function page() {
  return (
    <Container>
      <PageTitle content="تنظیمات فروشگاه" />
    </Container>
  );
}

export default page;
