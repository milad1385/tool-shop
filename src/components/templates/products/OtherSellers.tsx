"use client";
import MenuOverlay from "@/components/modules/main/Overlay";
import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import OtherSellersModal from "./OtherSellersModal";
import { ISellersBox } from "@/libs/types";
import { findCheapestPriceBTWSellers } from "@/utils/helper";
function OtherSellers({ sellers, productId, slug }: ISellersBox) {
  const [isShowSellers, setIsShowSellers] = useState(false);
  const cheapestSeller = findCheapestPriceBTWSellers(sellers);
  const filteredSellers = sellers.filter(
    (item) => item.seller._id !== cheapestSeller.seller._id,
  );
  return (
    <>
      {filteredSellers.length > 0 && (
        <div
          className="flex items-center gap-x-2"
          onClick={() => setIsShowSellers(true)}
        >
          <span className="text-xs font-bold text-gray-500">
            انتخاب از {filteredSellers.length} فروشنده دیگر
          </span>
          <HiChevronLeft className="text-lg text-zinc-700" />
        </div>
      )}

      <OtherSellersModal
        sellers={filteredSellers}
        isShow={isShowSellers}
        onClose={setIsShowSellers}
        productId={productId}
        slug={slug}
      />

      <MenuOverlay isMobile isOpen={isShowSellers} onClose={setIsShowSellers} />
    </>
  );
}

export default OtherSellers;
