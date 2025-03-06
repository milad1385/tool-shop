import Title from "@/components/modules/Title";
import React from "react";
import SuggestedProductSlider from "./SuggestedProductSlider";

function SuggestedProduct() {
  return (
    <div className="my-12">
      <Title title="پیشنهاد های ترازو" />
      <SuggestedProductSlider />
    </div>
  );
}

export default SuggestedProduct;
