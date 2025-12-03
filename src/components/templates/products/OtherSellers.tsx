"use client";
import MenuOverlay from "@/components/modules/main/Overlay";
import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import OtherSellersModal from "./OtherSellersModal";
function OtherSellers() {
  const [isShowSellers, setIsShowSellers] = useState(false);
  return (
    <>
      <div
        className="flex items-center gap-x-2"
        onClick={() => setIsShowSellers(true)}
      >
        <span className="text-xs font-bold text-gray-500">
          انتخاب از 1 فروشنده دیگر
        </span>
        <HiChevronLeft className="text-lg text-zinc-700" />
      </div>

      <OtherSellersModal isShow={isShowSellers} onClose={setIsShowSellers} />

      <MenuOverlay isMobile isOpen={isShowSellers} onClose={setIsShowSellers} />
    </>
  );
}

export default OtherSellers;
