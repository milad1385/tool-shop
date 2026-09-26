import FilterCheckbox from "@/components/ui/FilterCheckbox";
import FilterTitle from "./FilterTitle";

function FilterByCategory({ categories }) {
  return (
    <div className="bg-white md:rounded-3xl px-5 py-4">
      <FilterTitle title="فیلتر بر اساس دسته بندی : " />
      <div className="w-full space-y-4 mt-5">
        <FilterCheckbox param="category" options={categories} />
      </div>
    </div>
  );
}

export default FilterByCategory;
