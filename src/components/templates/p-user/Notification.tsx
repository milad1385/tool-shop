import React from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import Title from "./Title";

function Notification() {
  return (
    <>
      <Title content="اطلاعیه مهم"/>
      <div className="bg-white border p-6 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="leading-8 mr-2">
            <p className="font-Lalezar">عنوان اطلاعیه خیلی مهم</p>
            <span className="text-xs text-stone-500">
              دوشنبه ۲۰ ام شهریور ۱۴۰۲
            </span>
            <p className="text-zinc-700">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div>
            <HiOutlineBellAlert className="text-[56px] text-stone-200" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
