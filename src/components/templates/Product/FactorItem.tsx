import React from "react";
import { HiChevronLeft } from "react-icons/hi";

function FactorItem() {
  return (
    <div className="border border-gray-300 rounded-md px-3 py-1">
      <div className="flex items-center justify-between gap-x-2">
        <span className="text-sm font-bold block">ولتاژ</span>
        <HiChevronLeft />
      </div>
      <p className="text-gray-500 text-xs font-bold mt-2">18 ولت</p>
    </div>
  );
}

export default FactorItem;
