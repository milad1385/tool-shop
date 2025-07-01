import ProductBox from "@/components/modules/main/ProductBox";
import { products } from "@/constants/data";
import React from "react";

function Products() {
  return (
    <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductBox {...product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
