"use client";
import React, { useState } from "react";
import { colors } from "@/constants/data";
import ColorBox from "./ColorBox";
function ColorBoxes() {
  const [activeColor, setActiveColor] = useState("black");
  const handleClick = (slug: string) => {
    console.log(slug);
    setActiveColor(slug);
  };
  return (
    <div className="w-full mb-5 flex items-center gap-3.5 flex-wrap">
      {colors.map((option) => (
        <ColorBox
          label={option.label}
          slug={option.slug}
          onClick={handleClick}
          key={option.id}
          selected={activeColor === option.slug}
        />
      ))}
    </div>
  );
}

export default ColorBoxes;
