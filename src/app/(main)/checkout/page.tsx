import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import CheckoutDetails from "@/components/templates/checkout/CheckoutDetails";
import React from "react";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/cart", name: "سبد خرید" },
          { id: 3, href: "/checkout", name: "ثبت سفارش" },
        ]}
      />

      <CheckoutDetails/>
    </Container>
  );
}

export default page;
