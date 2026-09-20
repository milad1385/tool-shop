import React from "react";
import OrderItem from "./OrderItem";
import Title from "./Title";

function Orders({ cart }) {
  return (
    <div className="mt-6">
      <Title title="لیست سفارش ها" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        {cart?.items?.map((cart) => (
          <OrderItem {...cart} key={cart._id} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
