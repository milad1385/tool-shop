import Container from "@/components/modules/p-user/Container";
import FavoriteList from "@/components/templates/p-user/favorites/FavoriteList";
import Title from "@/components/modules/p-user/Title";
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
