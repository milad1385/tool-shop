import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import ChangeShopSettings from "@/components/templates/p-seller/ChangeShopSettings";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تنظیمات فروشگاه",
};

function page() {
  return (
    <Container>
      <PageTitle content="تنظیمات فروشگاه" />
      <ChangeShopSettings/>
    </Container>
  );
}

export default page;
