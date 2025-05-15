"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsShop } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import HambergerMobileMenu from "./HambergerMobileMenu";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between p-6 lg:hidden h-24 bg-black relative rounded-2xl mb-28">
        <div
          className="cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <LuMenu className="text-2xl text-white" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center flex-col top-24">
          <div className="avatar online mt-8">
            <div className="w-24 rounded-full overflow-hidden border-4 border-white">
              <img src="/images/avatar-3.jpg" />
            </div>
          </div>

          <h1 className="text-[17px] md:text-lg font-Lalezar mt-4">
            <span className="text-yellow-500">خوش آمدید ،</span> میلاد سلامیان
          </h1>
        </div>
        <div>
          <Link href="/">
            <BsShop className="text-2xl text-white" />
          </Link>
        </div>
      </div>

      <HambergerMobileMenu isOpen={isOpen} onOpen={setIsOpen}/>
    </>
  );
}

export default MobileMenu;
