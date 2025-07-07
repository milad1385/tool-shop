import Pagination from "@/components/modules/main/Pagination";
import ProductBox from "@/components/modules/main/ProductBox";
import { products } from "@/constants/data";
import React from "react";
import SortProduct from "./SortProduct";

function Products() {
  return (
    <div className="col-span-12 md:col-span-9">
      <SortProduct/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductBox {...product} key={product.id} />
        ))}
      </div>
      <div className="w-full">
        <Pagination count={4} />
      </div>
    </div>
  );
}

export default Products;
