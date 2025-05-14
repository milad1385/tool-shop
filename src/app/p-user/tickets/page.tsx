import Container from "@/components/modules/p-user/Container";
import Filters from "@/components/modules/p-user/Filters";
import Title from "@/components/modules/p-user/Title";
import TicketList from "@/components/templates/p-user/tickets/TicketList";
import TicketsStats from "@/components/templates/p-user/tickets/TicketsStats";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";

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
        <Title content="تیکت ها">
          <Link href="/p-user/tickets/new" className="bg-amber-500 text-white flex items-center gap-x-2 px-4 py-2 rounded-md">
            <span>ایجاد تیکت جدید</span>
            <BsPlusCircle className="text-xl" />
          </Link>
        </Title>
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
