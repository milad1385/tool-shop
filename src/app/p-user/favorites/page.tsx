import Container from "@/components/templates/p-user/Container";
import FavoriteList from "@/components/templates/p-user/FavoriteList";
import Title from "@/components/templates/p-user/Title";
import React from "react";

function page() {
  return (
    <Container>
      <Title content="لیست علاقه مندی ها" />
      <FavoriteList />
    </Container>
  );
}

export default page;
