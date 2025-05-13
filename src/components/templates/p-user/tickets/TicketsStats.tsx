import React from "react";
import StatBox from "../../../modules/p-user/StatBox";
import { RiArticleLine } from "react-icons/ri";
import { FaFlagCheckered, FaRegStickyNote } from "react-icons/fa";
import { VscError } from "react-icons/vsc";

function TicketsStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
      <StatBox
        title="10 تیکت"
        icon={<RiArticleLine className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-purple-700 text-white"
        desc="ثبت کرده اید"
      />
      <StatBox
        title="7 تیکت"
        icon={<FaRegStickyNote className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-green-600 text-white"
        desc="پاسخ داده شده است"
      />
      <StatBox
        title="3 تیکت"
        icon={<FaFlagCheckered className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-amber-500 text-white"
        desc="در حال انتظار است"
      />
      <StatBox
        title="1 تیکت"
        icon={<VscError className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-red-500 text-white block lg:hidden"
        desc="بسته شده است"
      />
    </div>
  );
}

export default TicketsStats;
