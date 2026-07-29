import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import SearchDetails from "@/components/templates/search/SearchDetails";
import { IPage } from "@/libs/types";
import React from "react";

async function page({ searchParams }: IPage) {
  const { q } = await searchParams;

  return (
    <Container>
      <Breadcrumb
        links={[
          { name: "خانه", href: "/", id: 1 },
          { id: 2, name: "جستجو", href: "/search" },
          { id: 3, name: `${q}`, href: `/search?q=${q}` },
        ]}
      />
      <SearchDetails />
    </Container>
  );
}

export default page;
