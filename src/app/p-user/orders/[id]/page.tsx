import Container from "@/components/modules/p-user/Container";
import Title from "@/components/modules/p-user/Title";
import OrderDetails from "@/components/templates/p-user/orders/OrderDetails";
import OrdersList from "@/components/templates/p-user/orders/OrdersList";
import ProgressDeliverOrder from "@/components/templates/p-user/orders/ProgressDeliverOrder";
import { IPage } from "@/libs/types";
import { getUserOrder } from "@/services/orders.service";

async function page({ params }: IPage) {
  const { id } = await params;
  const order = await getUserOrder({ id });

  return (
    <Container>
      <Title content={`جزییات سفارش ${order.trackingCode}#`} isBack />
      <OrderDetails order={order} />
      <ProgressDeliverOrder status={order.status} />
      <OrdersList order={order} />
    </Container>
  );
}

export default page;
