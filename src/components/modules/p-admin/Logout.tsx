import React from "react";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

function Logout() {
  return (
    <div
      className={`flex items-center gap-x-2 text-[15px] cursor-pointer  md:text-base p-3 md:py-3.5 md:px-4 hover:bg-stone-100 rounded-md duration-300`}
    >
      <HiMiniArrowRightEndOnRectangle className="text-2xl text-zinc-700" />
      <span className="mr-1">خروج</span>
    </div>
  );
}

export default Logout;
