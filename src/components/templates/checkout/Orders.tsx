import React from "react";
import OrderItem from "./OrderItem";
import Title from "./Title";

function Orders() {
  return (
    <div className="mt-6">
      <Title title="لیست سفارش ها" />
      <div className="flex md:items-center md:justify-center gap-4 flex-wrap mt-5">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
}

export default Orders;
