import { IMobileAction } from "@/libs/types";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

function MobileOrderModal({ isShow, onShow , onStatus , status }: IMobileAction) {
  return (
    <div
      className={`bg-white h-1/2 fixed md:hidden transition-all ${
        isShow ? "bottom-0" : "bottom-[-50%]"
      } z-50 left-0 right-0 rounded-t-lg`}
    >
      <div className="flex items-center justify-between bg-gray-100 py-4 px-4">
        <span className="font-DanaDemiBold text-lg">مرتب سازی بر اساس</span>
        <svg className="w-6 h-6 text-blue-600" onClick={() => onShow(false)}>
          <use href="#x-circule"></use>
        </svg>
      </div>
      <div className="px-4 divide-y-2 divide-gray-100 child:py-[13px]">
        <OrderItem
          onStatus={onStatus}
          status={status}
          onShow={onShow}
          label="پیش فرض"
          slug="default"
        />
        <OrderItem
          onStatus={onStatus}
          status={status}
          onShow={onShow}
          label="محبوب ترین"
          slug="score-desc"
        />
        <OrderItem
          onStatus={onStatus}
          status={status}
          onShow={onShow}
          label="جدید ترین"
          slug="createdAt-desc"
        />
        <OrderItem
          onStatus={onStatus}
          status={status}
          onShow={onShow}
          label="آخرین"
          slug="createdAt-asc"
        />
        <OrderItem
          onStatus={onStatus}
          status={status}
          onShow={onShow}
          label="ارزان ترین"
          slug="price-asc"
        />
        <OrderItem
          onStatus={onStatus}
          status={status}
          onShow={onShow}
          label="گران ترین"
          slug="price-desc"
        />
      </div>
    </div>
  );
}

export default MobileOrderModal;
