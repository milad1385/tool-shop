"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IAccordionTitle } from "../../libs/types";

function Accordion({ title, children }: IAccordionTitle) {
  const subMenuRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      const height = subMenuRef.current.scrollHeight;
      subMenuRef.current.style.height = height + "px";
    } else {
      subMenuRef.current.style.height = 0 + "px";
    }
  }, [isOpen]);

  return (
    <div
      onClick={handleToggle}
      className="text-black bg-white shadow  px-3 py-5  md:p-6 md:rounded-xl md:cursor-pointer"
    >
      <div
        className={`md:cursor-pointer flex items-center justify-between`}
      >
        <p className="font-Lalezar text-xs/[25px] md:text-lg max-w-[260px] md:max-w-[600px]">
          {title}
        </p>
        <BiChevronDown
          className={`text-2xl ${isOpen ? "rotate-180" : ""} transition-all`}
        />
      </div>
      <div className={`submenu`} ref={subMenuRef}>
        <p className="pt-3 text-xs/[25px] md:text-sm/[25px] text-zinc-700">
          {children}
        </p>
      </div>
    </div>
  );
}

export default Accordion;
