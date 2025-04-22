import Link from "next/link";
import React from "react";
import {
  HiOutlineChevronRight,
  HiOutlineCreditCard,
  HiOutlineFaceSmile,
  HiOutlineSquares2X2,
  HiOutlineUser,
} from "react-icons/hi2";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import MenuItem from "./MenuItem";

function Sidebar() {
  const links = [
    { id: 1, title: "پیشخوان", icon: <HiOutlineSquares2X2 className="text-2xl" />, href: "/p-user" },
    {
      id: 2,
      title: "سفارش ها",
      icon: <HiOutlineCreditCard className="text-2xl" />,
      href: "/p-user/order",
    },
    {
      id: 3,
      title: "لیست علاقه مندی",
      icon: <HiOutlineFaceSmile className="text-2xl" />,
      href: "/p-user/favorite",
    },
    {
      id: 4,
      title: "دانلود ها",
      icon: <HiOutlineDocumentDownload className="text-2xl" />,
      href: "/p-user/downloads",
    },
    {
      id: 5,
      title: "جزییات حساب کاربری",
      icon: <HiOutlineUser className="text-2xl" />,
      href: "/p-user/info",
    },
    { id: 6, title: "خروج", icon: <HiOutlineChevronRight className="text-2xl" />, href: "" },
  ];
  return (
    <div className="col-span-3  hidden lg:block ">
      <div className="bg-white rounded-3xl overflow-hidden pb-4">
        <div className="h-24 bg-stone-800 relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col top-24">
            <div className="avatar online mt-8">
              <div className="w-24 rounded-full overflow-hidden">
                <img src="/images/user.jpg" />
              </div>
            </div>

            <h1 className="text-sm md:text-lg font-Lalezar mt-4">
              میلاد سلامیان
            </h1>
          </div>
        </div>

        <nav className="mt-24">
          {links.map((link) => (
            <MenuItem key={link.id} {...link} />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
