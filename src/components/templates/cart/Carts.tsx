import React from "react";
import CartItem from "./CartItem";

function Carts({ carts }) {
  return (
    <div className="col-span-12 md:col-span-9">
      {carts.items.map((cart) => (
        <CartItem key={cart._id} {...cart} />
      ))}
    </div>
  );
}

export default Carts;
