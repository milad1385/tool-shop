import Container from "@/components/modules/p-admin/Container";
import Filters from "@/components/modules/p-admin/Filters";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import Search from "@/components/modules/p-admin/Search";
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
        <div className="flex items-center gap-x-4">
          <Filters filterField="status" options={DiscountFilterOptions} />
          <Search/>
        </div>
      </div>
      <DiscountList />
    </Container>
  );
}

export default page;
