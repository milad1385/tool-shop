"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import {
  HiArrowLeftEndOnRectangle,
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineChevronDown,
  HiOutlineHome,
  HiOutlinePhoneArrowUpRight,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiXMark,
} from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuArrowDownUp, LuMenu } from "react-icons/lu";
import MenuOverlay from "./Overlay";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <LuMenu
        onClick={() => setIsOpen((prev) => !prev)}
        className="block md:hidden text-2xl text-[#1f2937] ml-3 cursor-pointer"
      />
      <div
        className={`fixed md:hidden overflow-y-auto bg-white transition-all w-64 z-30 ${
          isOpen ? "right-0" : "-right-64"
        } top-0 bottom-0 p-4`}
      >
        {/* mobile menu header */}
        <div className="flex items-center justify-between pb-4 border-b border-b-gray-100">
          <Image
            src="/images/logo.png"
            alt="logo.png"
            className="w-[100px]  h-[35px]  select-none"
            width={1920}
            height={1080}
          />
          <HiXMark
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-xl"
          />
        </div>
        {/* mobile body */}
        <div className="flex items-center my-4 pr-2.5 bg-yellow-500/20 h-10 rounded-md">
          <Link href="/" className="text-yellow-500 flex items-center gap-x-2">
            <HiOutlineHome className="text-yellow-500 text-xl" />
            صفحه اصلی
          </Link>
        </div>
        <ul className="text-zinc-700 dark:text-white child:pr-2.5 space-y-6 pb-8 cursor-pointer">
          <li className="justify-between">
            <div
              className="gap-x-2"
              onClick={() => setIsOpenSubMenu((prev) => !prev)}
            >
              <div className="flex items-center justify-between transition-all select-none">
                <div className="flex items-center gap-x-2 shopping">
                  <HiOutlineShoppingBag className="text-xl" />
                  فروشگاه
                </div>
                <HiOutlineChevronDown
                  className={`text-xl transition-all ${
                    isOpenSubMenu ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <ul
              className={`pr-5 pt-3 space-y-4 text-[13px] child:transition-all ${
                isOpenSubMenu ? "block" : "hidden"
              }`}
            >
              <li>
                <a href="#" className="gap-x-2"></a>
                <Link href="/products/1">دریل رونیکس</Link>
              </li>
              <li>
                <Link href="/products/1">دریل شارژی ویژه</Link>
              </li>
              <li>
                <Link href="/products/1">دریل بتن کن</Link>
              </li>
              <li>
                <Link href="/products/1">دستگاه تجاری</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/category/1" className="flex items-center gap-x-2">
              <HiOutlineChatBubbleLeftEllipsis className="text-xl" />
              دسته بندی
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center gap-x-2">
              <HiOutlineBriefcase className="text-xl" />
              درباره ما
            </Link>
          </li>
          <li>
            <Link href="/blog" className="flex items-center gap-x-2">
              <IoDocumentTextOutline className="text-xl" />
              بلاگ
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex items-center gap-x-2">
              <HiOutlinePhoneArrowUpRight className="text-xl" />
              تماس با ما
            </Link>
          </li>
          <li>
            <Link href="/seller" className="flex items-center gap-x-2">
              <BsShop className="text-xl" />
              فروشنده ها
            </Link>
          </li>
          <li>
            <Link href="/products" className="flex items-center gap-x-2">
              <AiOutlineProduct className="text-2xl" />
              محصولات
            </Link>
          </li>
          <li>
            <Link href="/comparison" className="flex items-center gap-x-2">
              <LuArrowDownUp className="text-2xl" />
              مقایسه
            </Link>
          </li>
          <li>
            <Link href="/p-user" className="flex items-center gap-x-2">
              <FaRegUser className="text-xl" />
              پنل کاربری
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-start gap-y-6 border-t border-t-gray-100  text-yellow-500 py-6 px-2.5">
          <Link href="/auth/login" className="inline-flex items-center gap-x-2">
            <HiArrowLeftEndOnRectangle className="text-xl" />
            ورود و ثبت نام
          </Link>

          <Link href="/cart" className="inline-flex items-center gap-x-2">
            <HiOutlineShoppingCart className="text-xl" />
            سبد خرید
          </Link>
          {/* <Link href="/" className="inline-flex items-center gap-x-2">
            <IoSettingsOutline className="text-xl" />
            پنل مدیریت
          </Link> */}
        </div>
      </div>

      <MenuOverlay isOpen={isOpen} onClose={setIsOpen} />
    </>
  );
}

export default MobileMenu;
