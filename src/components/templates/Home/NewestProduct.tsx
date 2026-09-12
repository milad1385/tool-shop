import Title from "@/components/modules/main/Title";
import React from "react";
import NewestProductSlider from "./NewestProductSlider";
import { getAllProducts } from "@/services/products.service";

async function NewestProduct() {
  const products = await getAllProducts();
  return (
    <div className="my-10">
      <Title title="جدید ترین محصولات" />
      <NewestProductSlider products={products} />
    </div>
  );
}

export default NewestProduct;
