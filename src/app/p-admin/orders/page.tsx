import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import OrderList from "@/components/templates/p-admin/OrderList";
import { orderStatusFilterOptions } from "@/constants/data";
import React from "react";

function page() {
  return (
    <Container>
     <TableOperation pageTitle="لیست سفارش ها" options={orderStatusFilterOptions} />
     <OrderList/>
    </Container>
  );
}

export default page;
