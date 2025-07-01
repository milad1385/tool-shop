import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FilterTitle from "./FilterTitle";
function RangeFilter() {
  const [rangeValue, setRangeValue] = useState<[number, number]>([30, 60]);

  return (
    <div className="bg-white rounded-2xl p-3">
      <FilterTitle title="فیلتر بر اساس قیمت" />
      <RangeSlider
        id="range-slider-yellow"
        value={rangeValue}
        onInput={setRangeValue}
      />
    </div>
  );
}

export default RangeFilter;
