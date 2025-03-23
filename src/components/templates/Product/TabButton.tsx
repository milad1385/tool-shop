import { ITabButton } from "@/libs/types";
import React from "react";

function TabButton({ tab, onTab, name, label }: ITabButton) {
  let activeClass = "bg-yellow-500 text-white rounded-xl";
  return (
    <button
      onClick={() => onTab(name)}
      className={`p-2 ${tab === name ? activeClass : ""}`}
    >
      {label}
    </button>
  );
}

export default TabButton;
