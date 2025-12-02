import { IModalDetail } from "@/libs/types";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import { LuCalendarClock, LuTruck } from "react-icons/lu";

function SendModal({ isShow, onClose }: IModalDetail) {
  return (
    <div
      className={`bg-white h-1/2 fixed md:hidden transition-all px-4 py-5 ${
        isShow ? "bottom-0" : "bottom-[-50%]"
      } z-50 left-0 right-0 rounded-t-lg`}
    >
      <div className="flex items-center justify-between border-b-[1.7px] border-b-gray-200 pb-4">
        <h3 className="text-[15px] font-bold">روش‌ها و هزینه‌های ارسال</h3>
        <FaXmark
          className="text-xl text-gray-600"
          onClick={() => onClose(false)}
        />
      </div>

      <div className="space-y-3 mt-5">
        <div>
          <div className="flex items-center gap-x-2">
            <LuTruck className="text-xl text-yellow-500" />
            <p className="text-base text-zinc-700 font-bold">توسط ترازو</p>
          </div>
          <p className="text-justify text-sm/[25px] text-zinc-500 mt-2">
            این کالا در انبار ترازو موجود و آماده پردازش است و توسط پیک ترازو در
            بازه انتخابی ارسال خواهد شد.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <LuCalendarClock className="text-xl text-blue-600" />
            <p className="text-base text-zinc-700 font-bold">
              ارسال سریع ترازو
            </p>
          </div>
          <p className="text-justify text-sm/[25px] text-zinc-500 mt-2">
            اگر سفارش را قبل از ساعت ۶ عصر ثبت کنید، همان روز ارسال می‌شود. در
            صورت ثبت سفارش بعد از ساعت ۶ عصر، فردا ارسال خواهد شد.
          </p>
        </div>

        <button
          className="py-3 w-full bg-gray-200 font-bold text-[15px] rounded-lg"
          onClick={() => onClose(false)}
        >
          باشه ، فهمیدم
        </button>
      </div>
    </div>
  );
}

export default SendModal;
