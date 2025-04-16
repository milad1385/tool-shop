import React from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

function ArticleTitle() {
  return (
    <div className="border-r-4 bg-slate-100 border-yellow-400 mb-4 rounded-2xl p-4">
      <h1 className="font-Lalezar text-lg md:text-xl text-zinc-700">
        لورم ایپسوم متن ساختگی با تولید سادگی
      </h1>
      <div className="flex items-center gap-4 mt-3 md:mt-1">
        <div className="flex items-center gap-x-1">
          <LuClock3 className="text-base md:text-lg text-zinc-700" />
          <span className="text-xs md:text-[13px]">14 تیر 1402</span>
        </div>
        <div className="flex items-center gap-x-1">
          <IoFolderOpenOutline className="text-base md:text-lg text-zinc-700" />
          <span className="text-xs md:text-[13px]"> ابزارآلات</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleTitle;
