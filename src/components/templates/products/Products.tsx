import Pagination from "@/components/modules/main/Pagination";
import ProductBox from "@/components/modules/main/ProductBox";
import { products } from "@/constants/data";
import React, { Suspense } from "react";
import SortProduct from "./SortProduct";
import MobileSearch from "./MobileSearch";
import MobileFilter from "./MobileFilter";
import PaginationFallback from "@/components/modules/main/PaginationFallback";

function Products() {
  return (
    <div className="col-span-12 md:col-span-9">
      <MobileSearch />
      <MobileFilter />
      <SortProduct />
      <Suspense fallback={<div>Loading ...</div>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductBox {...product} key={product.id} />
          ))}
        </div>
      </Suspense>
      <Suspense fallback={<PaginationFallback />}>
        <div className="w-full">
          <Pagination count={4} />
        </div>
      </Suspense>
    </div>
  );
}

export default Products;
