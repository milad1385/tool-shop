import Title from "@/components/modules/Title";
import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function QuetionSearchInput() {
  return (
    <div className="absolute">
      <Title title="سوال خود را جستجو کنید ..." className="text-white" />
      <div className=" h-[48px] md:w-[500px]  border border-gray-300 flex items-center rounded-md overflow-hidden justify-between">
        <input
          type="text"
          placeholder="سوال خود را جستجو کنید"
          className="outline-none h-full w-full px-4 text-sm md:text-base"
        />
        <button className="bg-gray-100 hover:bg-gray-200 transition-all h-full px-4">
          <HiOutlineMagnifyingGlass className="text-[24px]" />
        </button>
      </div>
    </div>
  );
}

export default QuetionSearchInput;
