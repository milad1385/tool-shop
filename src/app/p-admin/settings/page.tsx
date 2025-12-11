import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CreateSlider from "@/components/templates/p-admin/CreateSlider";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="تنظیمات سایت ترازو" />
      <CreateSlider />
    </Container>
  );
}

export default page;
