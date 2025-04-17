import React from "react";
import CartItem from "./CartItem";

function Carts() {
  return (
    <div className="col-span-12 md:col-span-9">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

export default Carts;
