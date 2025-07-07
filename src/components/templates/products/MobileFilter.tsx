"use client"
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import MobileFilterModal from "./MobileFilterModal";

function MobileFilter() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  return (
    <>
      <div className="block md:hidden mb-5">
        <div className="w-full flex items-center gap-x-6">
          <div
            onClick={() => setIsShowFilter(true)}
            className="flex-center gap-x-2 w-full bg-white py-5 rounded-3xl cursor-pointer"
          >
            <FaFilter className="text-xl text-zinc-700" />
            <span className="text-[15px]">فیلتر</span>
          </div>
          <div className="flex-center gap-x-2 w-full bg-white py-5 rounded-3xl cursor-pointer">
            <LuArrowUpDown className="text-2xl text-zinc-700" />
            <span className="text-[15px]">پیش فرض</span>
          </div>
        </div>
      </div>

      {isShowFilter && (
        <MobileFilterModal isShow={isShowFilter} onShow={setIsShowFilter} />
      )}
    </>
  );
}

export default MobileFilter;
