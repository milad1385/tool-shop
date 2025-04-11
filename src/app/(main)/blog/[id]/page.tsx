import Breadcrumb from "@/components/modules/Breadcrumb";
import React from "react";
import { FaClock } from "react-icons/fa";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

function page() {
  return (
    <div className="container mt-24 md:mt-48">
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/blog", name: "مقاله ها" },
          { id: 3, href: "/blog/1", name: "مقاله راجع فلان" },
        ]}
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9 bg-white p-4 rounded-3xl leading-8">
          <div className="border-r-4 bg-slate-100 border-yellow-400 mb-4 rounded-2xl p-4">
            <h1 className="font-Lalezar text-xl text-zinc-700">لورم ایپسوم متن ساختگی با تولید سادگی</h1>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-x-1">
                <LuClock3 className="text-lg text-zinc-700" />
                <span className="text-[13px]">14 تیر 1402</span>
              </div>
              <div className="flex items-center gap-x-1">
                <IoFolderOpenOutline className="text-lg text-zinc-700" />
                <span className="text-[13px]"> ابزارآلات</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-white rounded-2xl"></div>
      </div>
    </div>
  );
}

export default page;
