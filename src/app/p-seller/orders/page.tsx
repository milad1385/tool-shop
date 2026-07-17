import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import OrderList from "@/components/templates/p-admin/orders/OrderList";
import { orderStatusFilterOptions } from "@/constants/data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "سفارشات",
};

function page() {
  return (
    <Container>
      <TableOperation
        pageTitle="لیست سفارش ها"
        options={orderStatusFilterOptions}
      />
      <OrderList panel="seller" />
    </Container>
  );
}

export default page;
