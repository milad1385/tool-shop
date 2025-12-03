"use client";
import { useState } from "react";
import { BsShop } from "react-icons/bs";
import { FaRegSave } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiChevronLeft } from "react-icons/hi";
import { LuCalendarClock, LuTruck } from "react-icons/lu";
import { PiCoin } from "react-icons/pi";
import SendModal from "./SendModal";
import MenuOverlay from "@/components/modules/main/Overlay";
import ClubModal from "./ClubModal";

function MobileSellerBox() {
  const [isShowSend, setIsShowSend] = useState(false);
  const [isShowClub, setIsShowClub] = useState(false);
  return (
    <>
      <div className="divide-y-[1.5px] divide-gray-200">
        <div className="flex items-center gap-x-4 py-2">
          <div className="bg-gray-100 rounded-full w-[35px] h-[35px] flex-center">
            <BsShop className="text-zinc-600 text-xl" />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-2">
              <p className="text-black font-bold text-[13px]">
                اسمارت تکنولوژی قشم
              </p>
              <div className="bg-green-500 rounded-xl text-white px-2 py-0.5 text-sm">
                منتخب
              </div>
            </div>
            <div className="flex items-center gap-x-2 text-zinc-500 text-[13px]">
              <p>
                <span className="text-green-500 font-bold">۱۰۰%</span> رضایت از
                کالا
              </p>
              <div className="w-[0.5px] h-5 bg-gray-100"></div>
              <p>
                عملکرد <span className="text-green-500 font-bold">عالی</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-3 py-2">
          <div className="bg-gray-100 rounded-full w-[35px] h-[35px] flex-center">
            <FaRegCircleCheck className="text-zinc-600 text-lg" />
          </div>
          <p className="text-black font-bold text-[13px]">
            گارانتی ۱۸ ماهه کسری پارس
          </p>
        </div>

        <div className="pb-3">
          <div
            className="flex items-center justify-between"
            onClick={() => setIsShowSend(true)}
          >
            <div className="flex items-center gap-x-3 py-2">
              <div className="bg-gray-100 rounded-full w-[35px] h-[35px] flex-center">
                <FaRegSave className="text-zinc-600 text-lg" />
              </div>
              <p className="text-black font-bold text-[13px]">
                روش ها و هزینه ارسال
              </p>
            </div>
            <div>
              <HiChevronLeft className="text-lg text-zinc-700" />
            </div>
          </div>
          <div className="px-10 space-y-2">
            <div className="flex items-center gap-x-2">
              <LuTruck className="text-xl text-yellow-500" />
              <p className="text-xs text-gray-500">توسط ترازو</p>
            </div>
            <div className="flex items-center gap-x-2">
              <LuCalendarClock className="text-xl text-blue-600" />
              <p className="text-xs text-gray-500">ارسال سریع ترازو</p>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-between"
          onClick={() => setIsShowClub(true)}
        >
          <div className="flex items-center gap-x-3 py-2">
            <div className="bg-gray-100 rounded-full w-[35px] h-[35px] flex-center">
              <PiCoin className="text-zinc-600 text-lg" />
            </div>
            <p className="text-black font-bold text-[13px]">
              ۱۵۰ امتیاز ترازو کلاب دریافت کنید
            </p>
          </div>
          <div>
            <HiChevronLeft className="text-lg text-zinc-700" />
          </div>
        </div>
      </div>

      <SendModal isShow={isShowSend} onClose={setIsShowSend} />
      <ClubModal isShow={isShowClub} onClose={setIsShowClub} />

      <MenuOverlay isMobile isOpen={isShowSend} onClose={setIsShowSend} />
      <MenuOverlay isMobile isOpen={isShowClub} onClose={setIsShowClub} />
    </>
  );
}

export default MobileSellerBox;
