import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function Search() {
  return (
    <div className=" h-[48px] w-[65%] border border-gray-300 hidden md:flex items-center rounded-md overflow-hidden justify-between">
      <input
        type="text"
        placeholder="جستجو کنید در ترازو ..."
        className="outline-none h-full w-full px-4"
      />
      <button className="bg-gray-100 hover:bg-gray-200 transition-all h-full px-4">
        <HiOutlineMagnifyingGlass className="text-[24px]" />
      </button>
    </div>
  );
}

export default Search;
