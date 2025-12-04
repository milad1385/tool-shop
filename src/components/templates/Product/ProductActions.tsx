import ToolTipBox from "@/components/modules/main/ToolTip";
import React from "react";
import { BsFillShareFill } from "react-icons/bs";
import { FaChartLine, FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { LuArrowDownUp, LuBellRing } from "react-icons/lu";

function ProductActions() {
  return (
    <div className="flex flex-col gap-y-5 text-xl text-gray-700 pl-2">
      <div className="group relative cursor-pointer">
        <FaRegHeart />
        <ToolTipBox text="اضافه به علاقه مندی" />
      </div>
      <div className="group relative cursor-pointer">
        <BsFillShareFill />
        <ToolTipBox text="به اشتراک گذاری کالا" />
      </div>
      <div className="group relative cursor-pointer">
        <LuBellRing />
        <ToolTipBox text="اطلاع رسانی شگفت انگیز" />
      </div>
      <div className="group relative cursor-pointer">
        <FaChartLine />
        <ToolTipBox text="نمودار قیمت کالا" />
      </div>
      <div className="group relative cursor-pointer">
        <LuArrowDownUp />
        <ToolTipBox text="مقایسه کردن کالا" />
      </div>
      <div className="group relative cursor-pointer">
        <FaRegBookmark />
        <ToolTipBox text="افزودن کالا به لیست" />
      </div>
    </div>
  );
}

export default ProductActions;
