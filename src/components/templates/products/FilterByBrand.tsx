import FilterCheckbox from "@/components/ui/FilterCheckbox";
import { brands } from "@/constants/data";
import FilterTitle from "./FilterTitle";

function FilterByBrand() {
  return (
    <div className="bg-white rounded-3xl px-5 py-4">
      <FilterTitle title="فیلتر بر اساس برند : " />
      <div className="w-full space-y-4 mt-5">
        <FilterCheckbox param="brand" options={brands} />
      </div>
    </div>
  );
}

export default FilterByBrand;
