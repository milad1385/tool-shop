import React from "react";
import { FaXmark } from "react-icons/fa6";

function SellerInfoBox({ onClose }: { onClose?: any }) {
  return (
    <div className="w-[340px] md:w-[470px] rounded-md bg-white px-4 py-4">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-3">
        <h3 className="font-bold text-base md:text-[17px]">
          اطلاعات تکمیلی فروشنده
        </h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="py-4 px-3">
        <h3 className="text-sm md:text-[17px] font-bold">
          فروشگاه اسمارت تکنولوژی قشم
        </h3>
        <p className="text-xs md:text-[13px] text-gray-500 mt-3">عضو از ۵ سال و ۴ ماه</p>

        <div className="mt-5 flex flex-col items-center space-y-4">
          <span className="text-2xl md:text-3xl font-bold text-[#65aa57]">۸۸%</span>
          <p className="text-sm md:text-base font-bold md:font-normal">رضایت خریداران از کیفیت کالاها</p>
          <span className="text-xs md:text-[13px] text-gray-500 mt-3 font-bold">
            ۶۱,۸۳۳ نفر امتیاز داده‌اند
          </span>
          <div className="w-full border-b-2 border-b-gray-200 pb-3.5">
            <div className="rounded-xl overflow-hidden flex flex-row-reverse items-center gap-x-[2px]">
              <div className="bg-[#f9a825] w-[8%] h-4"></div>
              <div className="bg-[#f9bc00] w-[4%] h-4"></div>
              <div className="bg-[#b1b64d] w-[6%] h-4"></div>
              <div className="bg-[#65aa57] w-[25%] h-4"></div>
              <div className="bg-[#00a049] w-[60%] h-4"></div>
            </div>
            <div className="w-full flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">کاملا ناراضی</span>
              <span className="text-xs text-gray-500">کاملا راضی</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4 w-full">
            <span className="text-3xl md:text-4xl font-bold text-[#00a049] mt-4">عالی</span>
            <p className="text-sm md:text-base font-bold md:font-normal">عملکرد کلی فروشنده</p>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-center gap-y-1.5">
                <span className="text-sm md:text-base font-bold text-gray-500">۹۹.۹٪</span>
                <p className="text-xs text-gray-500">تامین به موقع</p>
              </div>
              <div className="flex flex-col items-center gap-y-1.5">
                <span className="text-sm md:text-base font-bold text-gray-500">۹۹.۹٪</span>
                <p className="text-xs text-gray-500">تعهد ارسال</p>
              </div>
              <div className="flex flex-col items-center gap-y-1.5">
                <span className="text-sm md:text-base font-bold text-gray-500">۹۹.۹٪</span>
                <p className="text-xs text-gray-500">بدون مرجوعی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerInfoBox;
