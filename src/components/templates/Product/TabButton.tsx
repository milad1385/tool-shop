import { ITabButton } from "@/libs/types";
import React from "react";

function TabButton({ tab, onTab, name, label }: ITabButton) {
  const activeClass = "bg-yellow-500 text-white rounded-lg";
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
