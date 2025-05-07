import React from "react";
import StatBox from "./StatBox";
import { RiArticleLine } from "react-icons/ri";
import { FaFlagCheckered, FaRegStickyNote } from "react-icons/fa";
import { VscError } from "react-icons/vsc";

function CommentsStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
      <StatBox
        title="14 کامنت"
        icon={<RiArticleLine className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-sky-500 text-white"
        desc="ثبت کرده اید"
      />
      <StatBox
        title="8 کامنت"
        icon={<FaRegStickyNote className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-green-600 text-white"
        desc="تایید شده است"
      />
      <StatBox
        title="5 کامنت"
        icon={<FaFlagCheckered className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-orange-500 text-white"
        desc="در حال بررسی است"
      />
      <StatBox
        title="1 کامنت"
        icon={<VscError className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-red-500 text-white block lg:hidden"
        desc="رد شده است"
      />
    </div>
  );
}

export default CommentsStats;
