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
      <div className="bg-white rounded-2xl md:rounded-3xl p-4 mt-8">
        <Notification />
        <Title content="سفارش های اخیر شما" />
        <Orders />
      </div>
    </div>
  );
}

export default page;
