import React from "react";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

function Logout() {
  return (
    <button className="bg-gray-100 size-10 flex-center rounded-md hover:bg-gray-200 transition-all">
      <HiMiniArrowRightEndOnRectangle className="text-2xl text-zinc-700" />
    </button>
  );
}

export default Logout;
