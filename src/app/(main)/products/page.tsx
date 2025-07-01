import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import React from "react";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { name: "خانه", href: "/", id: 1 },
          { id: 2, name: "فروشگاه", href: "/products" },
        ]}
      />
    </Container>
  );
}

export default page;
