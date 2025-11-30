import React from "react";
import FilterSide from "../products/FilterSide";
import Products from "@/components/templates/products/Products";

function ProductList() {
  return (
    <div className="grid grid-cols-12 gap-x-5 mt-6">
      <FilterSide />
      <Products />
    </div>
  );
}

export default ProductList;
