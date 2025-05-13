import Container from "@/components/modules/p-user/Container";
import Filters from "@/components/modules/p-user/Filters";
import Orders from "@/components/templates/p-user/orders/Orders";
import Title from "@/components/modules/p-user/Title";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سفارش ها - پنل کاربری",
  description:"لیست سفارش های خود را میتوانید مشاهده کنید",
  icons: {
    icon: "/images/tool.png",
  },
  openGraph: {
    title: "ابزار آلات ترازو",
  },
};

function page() {
  return (
    <Container>
      <Title content="سفارش ها" />
      <Filters
        items={[
          { id: 0, title: "همه", slug: "all" },
          { id: 1, title: "پرداخت شده", slug: "paid" },
          { id: 2, title: "لغو شده", slug: "canceled" },
          { id: 3, title: "مرجوع شده", slug: "deported" },
          { id: 4, title: "تحویل داده شده", slug: "deliverd" },
        ]}
        slug="status"
      />
      <Orders />
    </Container>
  );
}

export default page;
