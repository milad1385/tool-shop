"use client";
import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import MenuOverlay from "../main/Overlay";
import MobileSidebar from "./MobileSidebar";

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <HiMiniBars3BottomRight
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl"
      />
      <MobileSidebar isShowMenu={isOpen} onShow={setIsOpen} />

      <MenuOverlay isOpen={isOpen} onClose={setIsOpen} />
    </div>
  );
}

export default SidebarMenu;
