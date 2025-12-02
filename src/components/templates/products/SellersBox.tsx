import React from "react";
import SellerBox from "./SellerBox";
import MobileSellerBox from "./MobileSellerBox";
import { HiChevronLeft } from "react-icons/hi";

function SellersBox() {
  return (
    <div className="bg-white rounded-2xl px-5 py-4 lg:pt-7 mt-8">
      <h3 className="font-Lalezar text-xl lg:text-2xl hidden lg:block">
        فروشندگان این کالا
      </h3>
      {/* desktop seller box */}
      <div className="divide-y-2 divide-gray-100 hidden lg:block">
        <SellerBox />
        <SellerBox />
        <SellerBox />
        <SellerBox />
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-Lalezar text-lg lg:text-2xl text-zinc-700">
          فروشندگان این کالا
        </h3>
        <div className="flex items-center gap-x-2">
          <span className="text-xs font-bold text-gray-500">انتخاب از 1 فروشنده دیگر</span>
          <HiChevronLeft className="text-lg text-zinc-700" />
        </div>
      </div>
      {/* mobile seller box */}

      <div className="block lg:hidden pt-4">
        <MobileSellerBox />
      </div>
    </div>
  );
}

export default SellersBox;
