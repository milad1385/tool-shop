import { ICheckbox } from "@/libs/types";
import React from "react";

function Checkbox({ label, slug, onChange }: ICheckbox) {
  return (
    <label className="flex items-center cursor-pointer justify-between">
      <input
        onChange={onChange}
        type="checkbox"
        className="peer hidden"
        value={slug}
      />
      <span className="ml-2 text-[15px] text-gray-800">{label}</span>
      <div className="w-5 h-5 border-2 border-yellow-500 rounded-sm transition-colors peer-checked:bg-yellow-300" />
    </label>
  );
}

export default Checkbox;
