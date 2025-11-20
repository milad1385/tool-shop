import { IColorBox } from "@/libs/types";
import React from "react";

function ColorBox({ label, slug, onClick , selected}: IColorBox) {
  return (
    <div
      onClick={() => onClick?.(slug)}
      className={`px-2 py-1.5 inline-flex items-center gap-x-3 border border-gray-400 rounded-lg md:cursor-pointer ${selected ?"bg-yellow-200 border-yellow-500" :""}`}
    >
      <span>{label}</span>
      <span
        className={`block w-4 h-4 rounded-full ${
          slug.includes("black") ? "bg-black" : `bg-${slug}-500`
        } `}
      ></span>
    </div>
  );
}

export default ColorBox;
