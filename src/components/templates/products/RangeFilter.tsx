import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FilterTitle from "./FilterTitle";
import { formattedPrice } from "@/utils/helper";
function RangeFilter() {
  const [rangeValue, setRangeValue] = useState<[number, number]>([30, 60]);

  return (
    <div className="bg-white rounded-3xl py-4 px-5">
      <FilterTitle title="فیلتر بر اساس قیمت : " />
      <RangeSlider
        id="range-slider-yellow"
        value={rangeValue}
        onInput={setRangeValue}
      />
      <div className="w-full mt-5 text-[15px] text-zinc-700">
        قیمت از {formattedPrice(rangeValue[0])} تا {formattedPrice(rangeValue[1])} هزار تومان
      </div>
    </div>
  );
}

export default RangeFilter;
