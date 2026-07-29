import ProductBox from "@/components/modules/main/ProductBox";
import { products } from "@/constants/data";
import React from "react";
import SearchProductSlider from "./SearchProductSlider";
import SearchArticleSlider from "./SearchArticleSlider";

function SearchDetails() {
  return (
    <div className="my-5">
      <SearchProductSlider />
      <SearchArticleSlider />
    </div>
  );
}

export default SearchDetails;
