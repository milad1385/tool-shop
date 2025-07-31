import Container from "@/components/modules/p-admin/Container";
import Filters from "@/components/modules/p-admin/Filters";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CreateDiscount from "@/components/templates/p-admin/CreateDiscount";
import DiscountList from "@/components/templates/p-admin/DiscountList";
import { DiscountFilterOptions } from "@/constants/data";
import React from "react";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد کد تخفیف" />
      <CreateDiscount />
      <div className="flex items-center justify-between my-8">
        <PageTitle content="لیست کد تخفیف" />
        <Filters
          filterField="status"
          options={DiscountFilterOptions}
        />
      </div>
      <DiscountList />
    </Container>
  );
}

export default page;
