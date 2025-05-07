import CommentList from "@/components/templates/p-user/CommentList";
import CommentsStats from "@/components/templates/p-user/CommentsStats";
import Container from "@/components/templates/p-user/Container";
import Filters from "@/components/templates/p-user/Filters";
import Title from "@/components/templates/p-user/Title";
import React from "react";

function page() {
  return (
    <>
      <CommentsStats />
      <Container>
        <Title content="لیست نظرات" />
        <Filters
          items={[
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
