import Container from "@/components/modules/p-user/Container";
import FavoriteList from "@/components/templates/p-user/favorites/FavoriteList";
import Title from "@/components/modules/p-user/Title";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "علاقه مندی ها - پنل کاربری",
  description:"لیست علاقه مندی های خود را میتوانید مشاهده کنید",
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
      <Title content="لیست علاقه مندی ها" />
      <FavoriteList />
    </Container>
  );
}

export default page;
