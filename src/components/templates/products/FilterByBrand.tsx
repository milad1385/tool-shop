import React from "react";
import FilterTitle from "./FilterTitle";
import { brands } from "@/constants/data";
import Checkbox from "@/components/ui/Checkbox";

function FilterByBrand() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="bg-white rounded-3xl px-5 py-4">
      <FilterTitle title="فیلتر بر اساس برند : " />
      <div className="w-full space-y-4 mt-5">
        {brands.map((brand) => (
          <Checkbox
            key={brand.id}
            label={brand.label}
            slug={brand.slug}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterByBrand;
