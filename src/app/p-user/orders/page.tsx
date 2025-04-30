import Filters from "@/components/templates/p-user/Filters";
import Orders from "@/components/templates/p-user/Orders";
import Title from "@/components/templates/p-user/Title";
import React from "react";

function page() {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-4 mt-8">
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
    </div>
  );
}

export default page;
