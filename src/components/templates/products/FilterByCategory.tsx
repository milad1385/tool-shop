import FilterCheckbox from "@/components/ui/FilterCheckbox";
import { categoriesFilter } from "@/constants/data";
import FilterTitle from "./FilterTitle";

function FilterByCategory() {
  return (
    <div className="bg-white rounded-3xl px-5 py-4">
      <FilterTitle title="فیلتر بر اساس دسته بندی : " />
      <div className="w-full space-y-4 mt-5">
        <FilterCheckbox param="category" options={categoriesFilter} />
      </div>
    </div>
  );
}

export default FilterByCategory;
