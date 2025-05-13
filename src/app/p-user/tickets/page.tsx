import Container from "@/components/modules/p-user/Container";
import Filters from "@/components/modules/p-user/Filters";
import Title from "@/components/modules/p-user/Title";
import TicketList from "@/components/templates/p-user/tickets/TicketList";
import TicketsStats from "@/components/templates/p-user/tickets/TicketsStats";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تیکت ها - پنل کاربری",
  description: "لیست تیکت های خود را میتوانید مشاهده کنید",
  icons: {
    icon: "/images/tool.png",
  },
  openGraph: {
    title: "ابزار آلات ترازو",
  },
};

function page() {
  return (
    <>
      <TicketsStats />
      <Container>
        <Title content="تیکت ها" />
        <Filters
          items={[
            { id: 1, title: "همه", slug: "all" },
            { id: 2, title: "در انتظار پاسخ", slug: "proccessing" },
            { id: 3, title: "پاسخ داده شده", slug: "answered" },
          ]}
          slug="status"
        />
        <TicketList />
      </Container>
    </>
  );
}

export default page;
