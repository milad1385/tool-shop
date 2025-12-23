"use client";
import { IAccordionTitle } from "@/libs/types";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function Accordion({ title, children, className }: IAccordionTitle) {
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const el = subMenuRef.current;
    if (!el) return;

    if (isOpen) {
      const height = el.scrollHeight;
      el.style.height = height + "px";
    } else {
      el.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div
      onClick={handleToggle}
      className={`text-black bg-white shadow  px-3 py-5  md:p-6 rounded-xl md:cursor-pointer ${className}`}
    >
      <div className={`md:cursor-pointer flex items-center justify-between`}>
        <p className="font-bold text-sm/[25px] md:text-base max-w-[260px] md:max-w-[600px]">
          {title}
        </p>
        <BiChevronDown
          className={`text-2xl ${isOpen ? "rotate-180" : ""} transition-all`}
        />
      </div>
      <div className={`submenu`} ref={subMenuRef}>
        <p className="pt-3 text-[13px]/[26px] md:text-sm/[25px] text-zinc-700">
          {children}
        </p>
      </div>
    </div>
  );
}

export default Accordion;
