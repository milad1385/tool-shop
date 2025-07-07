"use client";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import MobileFilterModal from "./MobileFilterModal";
import MobileOrderModal from "./MobileOrderModal";
import MenuOverlay from "@/components/modules/main/Overlay";
import { IStatus } from "@/libs/types";

function MobileFilter() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isShowOrder, setIsShowOrder] = useState(false);
  const [status, setStatus] = useState<IStatus>({
    slug: "default",
    label: "پیش فرض",
  });
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
          <div
            onClick={() => setIsShowOrder(true)}
            className="flex-center gap-x-2 w-full bg-white py-5 rounded-3xl cursor-pointer"
          >
            <LuArrowUpDown className="text-2xl text-zinc-700" />
            <span className="text-[15px]">{status.label}</span>
          </div>
        </div>
      </div>

      {isShowFilter && (
        <MobileFilterModal isShow={isShowFilter} onShow={setIsShowFilter} />
      )}

      {isShowOrder && (
        <MobileOrderModal
          isShow={isShowOrder}
          onShow={setIsShowOrder}
          onStatus={setStatus}
          status={status}
        />
      )}

      <MenuOverlay isMobile isOpen={isShowOrder} onClose={setIsShowOrder} />
    </>
  );
}

export default MobileFilter;
