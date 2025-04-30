import { IStatBox } from "@/libs/types";
import React from "react";

function StatBox({ className, title, desc, icon }: IStatBox) {
  return (
    <div className={`flex justify-between items-center rounded-2xl lg:rounded-3xl p-4 lg:p-8 ${className}`}>
      <div className="space-y-2">
        <h3 className="text-base md:text-2xl font-Lalezar">{title}</h3>
        <p className="font-IranMedium text-xs md:text-sm">{desc}</p>
      </div>
      <div className="bg-gray-100 text-black w-[40px] lg:w-[56px] h-[40px] lg:h-[56px] rounded-full flex-center">
        {icon}
      </div>
    </div>
  );
}

export default StatBox;
