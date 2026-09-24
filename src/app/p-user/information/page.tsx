import { auth } from "@/auth";
import Container from "@/components/modules/p-user/Container";
import Title from "@/components/modules/p-user/Title";
import InformationInputs from "@/components/templates/p-user/information/InformationInputs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "اطلاعات کاربری ها - پنل کاربری",
  description: "اطلاعات کاربری خود را میتوانید مشاهده کنید",
  icons: {
    icon: "/images/tool.png",
  },
  openGraph: {
    title: "ابزار آلات ترازو",
  },
};

async function page() {
  const session = await auth();
  return (
    <Container>
      <Title content="جزییات حساب کاربری" />
      <InformationInputs user={session.user} />
    </Container>
  );
}

export default page;
