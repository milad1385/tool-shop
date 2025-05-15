import React from "react";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

function Logout() {
  return (
    <div
      className={`flex items-center gap-x-2 text-[15px] cursor-pointer md:cursor-none md:text-base p-3 md:py-4 md:px-8 hover:bg-stone-100 rounded-md md:rounded-none duration-300`}
    >
      <HiMiniArrowRightEndOnRectangle className="text-2xl text-zinc-700" />
      <span className="mr-1">خروج</span>
    </div>
  );
}

export default Logout;
