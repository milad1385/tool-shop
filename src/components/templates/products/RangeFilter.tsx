import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FilterTitle from "./FilterTitle";
import { formattedPrice } from "@/utils/helper";
import { useDebouncedCallback } from "use-debounce";

function RangeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMin = Number(searchParams.get("min")) || 2000000;
  const initialMax = Number(searchParams.get("max")) || 25000000;
  const [rangeValue, setRangeValue] = useState<[number, number]>([
    initialMin,
    initialMax,
  ]);

  // Debounced update function
  const updateURLParams = useDebouncedCallback((min: number, max: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("min", String(min));
    params.set("max", String(max));
    router.push(`?${params.toString()}`, { scroll: false });
  }, 500);

  const handleRangeChange = (value: [number, number]) => {
    setRangeValue(value);
    updateURLParams(value[0], value[1]);
  };

  return (
    <div className="bg-white rounded-3xl py-4 px-5">
      <FilterTitle title="فیلتر بر اساس قیمت :" />
      <RangeSlider
        id="range-slider-yellow"
        value={rangeValue}
        onInput={handleRangeChange}
        min={10000}
        max={50000000}
      />
      <div className="w-full mt-5 text-[15px] text-zinc-700">
         از {formattedPrice(rangeValue[0])} تا{" "}
        {formattedPrice(rangeValue[1])} هزار تومان
      </div>
    </div>
  );
}

export default RangeFilter;
