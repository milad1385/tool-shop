import { colorsFilter } from "@/constants/data";
import ColorBoxes from "./ColorBoxes";
import FilterTitle from "./FilterTitle";

function FilterByColor() {
  return (
    <div className="bg-white rounded-3xl px-5 py-4">
      <FilterTitle title="فیلتر بر اساس رنگ  : " />
      <div className="w-full  mt-5">
        <ColorBoxes param="color" options={colorsFilter} />
      </div>
    </div>
  );
}

export default FilterByColor;
