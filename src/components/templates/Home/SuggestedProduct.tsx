import Title from "@/components/modules/main/Title";
import React from "react";
import SuggestedProductSlider from "./SuggestedProductSlider";
import { getFeaturedProducts } from "@/services/products.service";

async function SuggestedProduct() {
  const products = await getFeaturedProducts();
  return (
    <div className="my-12">
      <Title title="پیشنهاد های ترازو" />
      <SuggestedProductSlider products={products} />
    </div>
  );
}

export default SuggestedProduct;
