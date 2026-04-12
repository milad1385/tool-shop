import Container from "@/components/modules/p-admin/Container";
import Filters from "@/components/modules/p-admin/Filters";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "درآمد",
};

function page() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <PageTitle content="میزان درآمد" />
        <Filters
          filterField="last"
          options={[
            { label: "7 روز گذشته", slug: "7" },
            { label: "30 روز گذشته", slug: "30" },
            { label: "90 روز گذشته", slug: "90" },
            { label: "120 روز گذشته", slug: "120" },
          ]}
        />
      </div>
    </Container>
  );
}

export default page;
