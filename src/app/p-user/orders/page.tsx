import Container from "@/components/templates/p-user/Container";
import Filters from "@/components/templates/p-user/Filters";
import Orders from "@/components/templates/p-user/Orders";
import Title from "@/components/templates/p-user/Title";
import React from "react";

function page() {
  return (
    <Container>
      <Title content="سفارش ها" />
      <Filters
        items={[
          { id: 1, title: "پرداخت شده", slug: "paid" },
          { id: 2, title: "لغو شده", slug: "canceled" },
          { id: 3, title: "مرجوع شده", slug: "deported" },
          { id: 4, title: "تحویل داده شده", slug: "deliverd" },
        ]}
        slug="status"
      />
      <Orders />
    </Container>
  );
}

export default page;
