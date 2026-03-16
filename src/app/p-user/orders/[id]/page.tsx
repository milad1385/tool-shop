import Container from "@/components/modules/p-user/Container";
import Title from "@/components/modules/p-user/Title";
import OrderDetails from "@/components/templates/p-user/orders/OrderDetails";
import OrdersList from "@/components/templates/p-user/orders/OrdersList";
import ProgressDeliverOrder from "@/components/templates/p-user/orders/ProgressDeliverOrder";

function page() {
  return (
    <Container>
      <Title content="جزییات سفارش #25556" isBack/>
      <OrderDetails />
      <ProgressDeliverOrder />
      <OrdersList />
    </Container>
  );
}

export default page;
