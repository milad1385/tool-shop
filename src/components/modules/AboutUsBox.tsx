import { IAboutUsBox } from "@/libs/types";
import React from "react";

function AboutUsBox({ title, icon, desc }: IAboutUsBox) {
  return (
    <div className="bg-white border rounded-3xl p-4 flex items-center mb-4 flex-col text-center gap-2">
      <div className="p-2 bg-[#eab308] rounded-xl w-[64px] h-[64px] flex-center">
        {icon}
      </div>
      <h3 className="text-lg font-Lalezar">{title}</h3>
      <p className="text-[15px] text-zinc-700">{desc}</p>
    </div>
  );
}

export default AboutUsBox;
