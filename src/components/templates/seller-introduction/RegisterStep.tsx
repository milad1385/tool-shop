import { IRegisterStep } from "@/libs/types";
import React from "react";
import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";

function RegisterStep({ icon, title, id }: IRegisterStep) {
  return (
    <div className="flex flex-col items-center gap-y-5 relative">
      <div
        className={`w-[55px] md:w-[60px] h-[55px] md:h-[60px] bg-yellow-500/20 flex-center rounded-full ${
          id === 1 ? "border-2 border-gray-100" : ""
        }`}
      >
        {icon}
      </div>
      <p className="font-bold text-xs md:text-sm text-zinc-700">{title}</p>
      <span className="flex-center absolute top-12 md:top-[50px] border-2 border-gray-100 bg-yellow-500 size-5 rounded-full text-white text-xs font-bold">
        {id}
      </span>
    </div>
  );
}

export default RegisterStep;
