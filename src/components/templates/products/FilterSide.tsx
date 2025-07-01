"use client";
import React from "react";
import RangeFilter from "./RangeFilter";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";

function FilterSide() {
  return (
    <div className="col-span-3 space-y-4">
      <RangeFilter />
      <FilterByCategory/>
      <FilterByBrand/>
    </div>
  );
}

export default FilterSide;
