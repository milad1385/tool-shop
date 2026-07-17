"use client";
import { adminPanelLinks, sellerPanelLinks } from "@/constants/data";
import { HiXMark } from "react-icons/hi2";
import Logout from "./Logout";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function MobileSidebar({ isShowMenu, onShow }) {
  const pathname = usePathname();
  const isAdmin = pathname.includes("/p-admin");
  const title = isAdmin ? "پنل مدیریت ادمین" : "پنل فروشنده";

  useEffect(() => {
    onShow(false);
  }, [pathname]);
  return (
    <>
      <div className="md:w-[260px]">
        <div
          className={`fixed lg:hidden bg-white ${
            isShowMenu ? "right-0" : "right-[-260px] "
          } md:right-0 overflow-y-auto z-40 bottom-0 transition-all top-0   w-[260px] gap-2  flex flex-col  md:py-[1.2rem] p-2 md:px-[1rem] text-lg`}
        >
          <div className="px-[13px] pt-2 pb-3 flex border-b md:border-0 border-b-gray-300 items-center justify-between md:mx-auto">
            <h2 className="font-Lalezar">{title}</h2>
            <HiXMark
              className="block md:hidden text-zinc-700 text-lg font-bold"
              onClick={() => onShow()}
            />
          </div>
          <div>
            <ul>
              <div className="space-y-2">
                {isAdmin
                  ? adminPanelLinks.map((link) => (
                      <MenuItem {...link} key={link.id} />
                    ))
                  : sellerPanelLinks.map((link) => (
                      <MenuItem {...link} key={link.id} />
                    ))}
              </div>
            </ul>
            <div className={!true ? "fixed bottom-3" : "left-0 right-0"}>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileSidebar;
