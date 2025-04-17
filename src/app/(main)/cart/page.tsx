import Breadcrumb from "@/components/modules/Breadcrumb";
import Container from "@/components/modules/Container";
import React from "react";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/cart", name: "سبد خرید" },
        ]}
      />
    </Container>
  );
}

export default page;
