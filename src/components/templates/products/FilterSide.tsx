"use client";
import React from "react";
import RangeFilter from "./RangeFilter";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";
import FilterByColor from "./FilterByColor";
import Search from "./Search";

function FilterSide({ categories }) {
  return (
    <div className="col-span-3 hidden md:block space-y-4">
      <Search />
      <RangeFilter />
      <FilterByCategory categories={categories} />
      <FilterByBrand />
      <FilterByColor />
    </div>
  );
}

export default FilterSide;
