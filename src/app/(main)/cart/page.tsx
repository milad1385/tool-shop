import Breadcrumb from "@/components/modules/Breadcrumb";
import Container from "@/components/modules/Container";
import CartDetails from "@/components/templates/cart/CartDetails";
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

      <CartDetails/>
    </Container>
  );
}

export default page;
