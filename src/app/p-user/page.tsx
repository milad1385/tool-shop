import Container from "@/components/modules/p-user/Container";
import Title from "@/components/modules/p-user/Title";
import Notification from "@/components/templates/p-user/main/Notification";
import Stats from "@/components/templates/p-user/main/Stats";
import Orders from "@/components/templates/p-user/orders/Orders";

function page() {
  return (
    <div>
      <Stats />
      <Container>
        <Notification />
        <Title content="سفارش های اخیر شما" />
        <Orders />
      </Container>
    </div>
  );
}

export default page;
