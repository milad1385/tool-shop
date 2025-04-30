import React from "react";
import StatBox from "./StatBox";
import { AiOutlineProduct } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import { TbBasketPause } from "react-icons/tb";
import { formattedPrice } from "@/utils/helper";

function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <StatBox
        title="9 محصول"
        icon={<AiOutlineProduct className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-yellow-500 text-white"
        desc="خریداری کرده اید"
      />
      <StatBox
        title="2 محصول"
        icon={<CgSandClock className="text-zinc-800 text-xl md:text-3xl" />}
        desc="در انتظار پرداخت"
        className="bg-black text-white"
      />
      <StatBox
        title="1 محصول"
        icon={<TbBasketPause className="text-zinc-800 text-xl md:text-3xl" />}
        desc="در انتظار پرداخت"
        className="bg-red-600 text-white"
      />
      <StatBox
        title={`${formattedPrice(4200000)}`}
        icon={<TbBasketPause className="text-zinc-800 text-xl md:text-3xl" />}
        desc="مجموع خرید"
        className="block lg:hidden bg-green-600 text-white"
      />
    </div>
  );
}

export default Stats;
