import Container from "@/components/templates/p-user/Container";
import MobileMenu from "@/components/templates/p-user/MobileMenu";
import Notification from "@/components/templates/p-user/Notification";
import Orders from "@/components/templates/p-user/Orders";
import Stats from "@/components/templates/p-user/Stats";
import Title from "@/components/templates/p-user/Title";

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
