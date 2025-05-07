import Container from "@/components/modules/p-user/Container";
import MobileMenu from "@/components/modules/p-user/MobileMenu";
import Notification from "@/components/templates/p-user/main/Notification";
import Orders from "@/components/templates/p-user/orders/Orders";
import Stats from "@/components/templates/p-user/main/Stats";
import Title from "@/components/modules/p-user/Title";

function page() {
  return (
    <div>
      <MobileMenu />
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
