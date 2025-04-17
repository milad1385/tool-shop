import React from "react";
import Carts from "./Carts";
import CheckoutBox from "./CheckoutBox";

function CartDetails() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Carts/>
      <CheckoutBox/>
    </div>
  );
}

export default CartDetails;
