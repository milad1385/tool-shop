import { IHambergerMobileMenu } from "@/libs/types";
import React, { useEffect } from "react";
import MenuOverlay from "../main/Overlay";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { links } from "@/constants/data";
import MenuItem from "./MenuItem";
import Logout from "./Logout";
import { usePathname } from "next/navigation";

function HambergerMobileMenu({ isOpen, onOpen }: IHambergerMobileMenu) {
  const pathname = usePathname();

  useEffect(() => {
    onOpen(false);
  }, [pathname]);
  return (
    <>
      <div
        className={`fixed md:hidden bg-white transition-all w-64 z-30 ${
          isOpen ? "right-0" : "-right-64"
        } top-0 bottom-0 p-4`}
      >
        <div className="flex items-center justify-between border-b-2 border-b-gray-100 pb-4">
          <Image
            src="/images/logo.png"
            alt="logo.png"
            className="w-[100px] md:w-[124px] h-[35px] md:h-[41px] select-none"
            width={1920}
            height={1080}
          />

          <FaXmark
            className="cursor-pointer md:cursor-default"
            onClick={() => onOpen(false)}
          />
        </div>
        <div className="mt-2 flex flex-col justify-between h-[90%]">
          <div className="space-y-2">
            {links.map((link) => (
              <MenuItem key={link.id} {...link} />
            ))}
          </div>
          <Logout />
        </div>
      </div>

      <MenuOverlay isOpen={isOpen} onClose={onOpen} />
    </>
  );
}

export default HambergerMobileMenu;
