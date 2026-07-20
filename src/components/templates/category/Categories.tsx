import CategoryBox from "@/components/modules/main/CategoryBox";
import { categories } from "@/constants/data";
import React from "react";
import NewestProduct from "../Home/NewestProduct";
import SuggestedProduct from "../Home/SuggestedProduct";

function Categories() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <CategoryBox key={category.id} {...category} />
        ))}
      </div>
      <div className="bg-yellow-500 px-8 py-1 md:py-2 rounded-3xl mt-10 mb-16">
        <NewestProduct />
      </div>

      <div className="bg-yellow-500 px-8 py-1 md:py-2 rounded-3xl">
        <SuggestedProduct />
      </div>
    </div>
  );
}

export default Categories;
