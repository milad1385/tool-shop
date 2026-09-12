import Title from "@/components/modules/main/Title";
import React from "react";
import BestSellerSlider from "./BestSellerSlider";
import { getAllProducts } from "@/services/products.service";

async function BestSeller() {
  const products = await getAllProducts();
  return (
    <div>
      <Title title="پرفروش ترین کالاها" />
      <BestSellerSlider products={products} />
    </div>
  );
}

export default BestSeller;
