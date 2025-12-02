import { IModalDetail } from "@/libs/types";
import React from "react";
import { FaXmark } from "react-icons/fa6";

function ClubModal({ isShow, onClose } : IModalDetail) {
  return (
    <div
      className={`bg-white h-[210px] fixed md:hidden transition-all px-4 py-5 ${
        isShow ? "bottom-0" : "bottom-[-40%]"
      } z-50 left-0 right-0 rounded-t-lg`}
    >
      <div className="flex items-center justify-between border-b-[1.7px] border-b-gray-200 pb-4">
        <h3 className="text-[15px] font-bold">امتیاز ترازو کلاب</h3>
        <FaXmark
          className="text-xl text-gray-600"
          onClick={() => onClose(false)}
        />
      </div>

      <p className="text-neutral-700 text-sm/[26px] mt-5">
        بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به صفحه ماموریت‌های کلابی
        سر بزنید.
      </p>
      <button
        className="py-3 w-full bg-gray-200 font-bold text-[15px] rounded-lg my-4"
        onClick={() => onClose(false)}
      >
        متوجه شدم
      </button>
    </div>
  );
}

export default ClubModal;
