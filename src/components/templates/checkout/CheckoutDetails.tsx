import React from "react";
import MainBox from "./MainBox";
import Checkout from "./Checkout";

function CheckoutDetails() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <MainBox />
      <Checkout />
    </div>
  );
}

export default CheckoutDetails;
