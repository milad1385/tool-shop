import Pagination from "@/components/modules/main/Pagination";
import ProductBox from "@/components/modules/main/ProductBox";
import { products } from "@/constants/data";
import React from "react";

function Products() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductBox {...product} key={product.id} />
        ))}
      </div>
      <Pagination count={4} />
    </div>
  );
}

export default Products;
