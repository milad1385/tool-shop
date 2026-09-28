import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import OrderBox from "@/components/templates/p-admin/orders/OrderBox";
import { IPage } from "@/libs/types";
import { getUserOrder } from "@/services/orders.service";

async function page({ params }: IPage) {
  const { id } = await params;
  const order = await getUserOrder({ id });
  return (
    <Container>
      <div className="mt-6 space-y-6">
        <PageTitle content={`جزییات سفارش ${order.trackingCode}#`} />

        <OrderBox order={order} />
      </div>
    </Container>
  );
}

export default page;
