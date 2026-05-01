import Button from "@/components/ui/Button";
import { IModal } from "@/libs/types";
import React from "react";
import { FaXmark } from "react-icons/fa6";

function ProductInfoModal({ onClose }: IModal) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 pt-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">
          جزییات محصول درخواستی
        </h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="pt-5 flex flex-col items-start px-4">
        <div className="flex items-center justify-between w-full">
          <h2>نام محصول : دریل شارژی مدل kl5852</h2>
          <div className="bg-green-500 text-white text-sm rounded-3xl py-2 px-5">تایید شده</div>
        </div>
        <div className="my-3 w-full">
          <div className="flex flex-col space-y-6 py-3 text-[13px] md:text-base">
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-x-2">
                <span className="block w-[15px] h-[15px] bg-red-500 rounded-full"></span>
                <span> رنگ قرمز</span>
              </div>
              <span>تعداد : 8</span>
              <span>قیمت : 68,000</span>
              <span>تخفیف : 25%</span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-x-2">
                <span className="block w-[15px] h-[15px] bg-sky-500 rounded-full"></span>
                <span> رنگ آبی</span>
              </div>

              <span>تعداد : 5</span>
              <span>قیمت : 45,000</span>
              <span>تخفیف : 15%</span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-x-2">
                <span className="block w-[15px] h-[15px] bg-yellow-500 rounded-full"></span>
                <span> رنگ زرد</span>
              </div>
              <span>تعداد : 3</span>
              <span>قیمت : 24,000</span>
              <span>تخفیف : ندارد</span>
            </div>
          </div>
          <Button onClick={() => onClose()}>مشاهده کردم</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoModal;
