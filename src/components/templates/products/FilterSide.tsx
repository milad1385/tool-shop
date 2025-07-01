"use client";
import React from "react";
import RangeFilter from "./RangeFilter";
import FilterByBrand from "./FilterByBrand";

function FilterSide() {
  return (
    <div className="col-span-3 space-y-4">
      <RangeFilter />
      <FilterByBrand/>
    </div>
  );
}

export default FilterSide;
