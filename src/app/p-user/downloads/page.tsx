import Container from "@/components/modules/p-user/Container";
import DownloadList from "@/components/templates/p-user/downloads/DownloadList";
import Title from "@/components/modules/p-user/Title";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "دانلود ها - پنل کاربری",
  description: "لیست دانلود های خود را میتوانید مشاهده کنید",
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
      <Title content="دانلود ها" />
      <DownloadList />
    </Container>
  );
}

export default page;
