import Title from "@/components/modules/main/Title";
import React from "react";
import NewestProductSlider from "./NewestProductSlider";

function NewestProduct() {
  return (
    <div className="my-10">
      <Title title="جدید ترین محصولات" />
      <NewestProductSlider/>
    </div>
  );
}

export default NewestProduct;
