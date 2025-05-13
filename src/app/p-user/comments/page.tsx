import CommentList from "@/components/templates/p-user/comments/CommentList";
import CommentsStats from "@/components/templates/p-user/comments/CommentsStats";
import Container from "@/components/modules/p-user/Container";
import Filters from "@/components/modules/p-user/Filters";
import Title from "@/components/modules/p-user/Title";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کامنت ها - پنل کاربری",
  description: "لیست کامنت های خود را میتوانید مشاهده کنید",
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
      <CommentsStats />
      <Container>
        <Title content="لیست نظرات" />
        <Filters
          items={[
            { id: 0, title: "همه", slug: "all" },
            { id: 1, title: "تایید شده", slug: "accepted" },
            { id: 2, title: "رد شده", slug: "rejected" },
            { id: 3, title: "در انتظار تایید", slug: "proccessing" },
            { id: 4, title: "پاسخ داده شده", slug: "answered" },
          ]}
          slug="status"
        />
        <CommentList />
      </Container>
    </>
  );
}

export default page;
