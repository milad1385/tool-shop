import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Categories from "@/components/templates/category/Categories";
import React from "react";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/category", name: "دسته بندی ها" },
        ]}
      />
      <Categories/>
    </Container>
  );
}

export default page;
