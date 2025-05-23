import StatBox from "@/components/modules/p-user/StatBox";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";

function Stats() {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 mb-5">
      <StatBox
        title="مقدار فروش"
        icon={
          <FaRegMoneyBillAlt className="text-zinc-800 text-xl md:text-3xl" />
        }
        className="bg-green-500 text-white"
        desc="250,000 تومان"
      />
      <StatBox
        title="تعداد کاربران"
        icon={<LuUsers className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-sky-500 text-white"
        desc="35 نفر"
      />
      <StatBox
        title="تعداد محصولات"
        icon={
          <AiOutlineProduct className="text-zinc-800 text-xl md:text-3xl" />
        }
        className="bg-red-500 text-white"
        desc="35 نفر"
      />
      <StatBox
        title="تعداد سفارشات"
        icon={
          <HiOutlineShoppingCart className="text-zinc-800 text-xl md:text-3xl" />
        }
        className="bg-yellow-500 text-white"
        desc="95 نفر"
      />
    </div>
  );
}

export default Stats;
