import React from "react";
import TrazoItems from "./TrazoItems";

function WhyTrazo() {
  return (
    <div className="mt-[380px] md:mt-[450px]">
      <h3 className="text-lg md:text-xl font-bold text-zinc-700">
        چرا ترازو جای خوبی برای فروش کالاست؟
      </h3>
      <span className="block h-[2.35px] bg-yellow-500 w-28 mt-5"></span>

      <TrazoItems />
    </div>
  );
}

export default WhyTrazo;
