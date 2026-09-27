import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import OrderList from "@/components/templates/p-admin/orders/OrderList";
import { orderStatusFilterOptions } from "@/constants/data";
import { IPage } from "@/libs/types";
import { getAllOrders } from "@/services/orders.service";

async function page({ searchParams }: IPage) {
  const { page, limit, status } = await searchParams;
  const { data, pagination } = await getAllOrders({
    page,
    limit,
    status: status || "all",
  });
  return (
    <Container>
      <TableOperation
        pageTitle="لیست سفارش ها"
        options={orderStatusFilterOptions}
      />
      <OrderList data={data} pagination={pagination} />
    </Container>
  );
}

export default page;
