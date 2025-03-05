import Image from "next/image";
import Link from "next/link";
import { BsQuestionCircle } from "react-icons/bs";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";

function Navbar() {
  return (
    <div className="bg-white pb-8 shadow">
      <div className="container">
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center gap-x-6 grow">
            <Image
              src="/images/logo.png"
              alt="logo.png"
              className="w-[124px] h-[41px]"
              width={124}
              height={41}
            />
            <div className="h-[48px] w-[65%] border border-gray-300 flex items-center rounded-md overflow-hidden justify-between">
              <input
                type="text"
                placeholder="جستجو کنید در ترازو ..."
                className="outline-none h-full w-full px-4"
              />
              <button className="bg-gray-100 hover:bg-gray-200 transition-all h-full px-4">
                <HiOutlineMagnifyingGlass className="text-[24px]" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-7">
            <div>
              <Link href="/about-us">
                <BsQuestionCircle className="text-xl text-[#1f2937]" />
              </Link>
            </div>
            <div className="text-sm">
              <Link href="/login">ثبت نام | ورود</Link>
            </div>
            <div className="relative md:cursor-pointer">
              <span className="absolute -top-4 left-4 size-5 rounded-full  flex items-center justify-center text-xs bg-yellow-400">
                3
              </span>
              <HiOutlineShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/">فروشگاه</Link>
            </li>
            <li>
              <Link href="/">وبلاگ</Link>
            </li>
            <li>
              <Link href="/">درباره ما</Link>
            </li>
            <li className="flex items-center gap-x-2 relative group">
              <Link href="/">بیشتر</Link>
              <IoChevronDown />
              {/* maga menu */}
              <div className="absolute z-10 top-6 transition-all group-hover:opacity-100 group-hover:visible invisible opacity-0  w-[528px] bg-white text-sm font-dana  shadow-lg rounded-xl px-5 flex items-center gap-x-8">
                <div>
                  <ul className="space-y-3 child:text-[#1f2937]">
                    <li>
                      <Link href="/">سفارش ها</Link>
                    </li>
                    <li>
                      <Link href="/">لیست علاقه مندی ها</Link>
                    </li>
                    <li>
                      <Link href="/">دانلود ها</Link>
                    </li>
                    <li>
                      <Link href="/">جزییات حساب کاربری</Link>
                    </li>
                    <li>
                      <Link href="/">پیشخوان حساب کاربری</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/">سوالات متداول</Link>
                    </li>
                    <li>
                      <Link href="/">جزییات وبلاگ</Link>
                    </li>
                    <li>
                      <Link href="/">سبد خرید</Link>
                    </li>
                    <li>
                      <Link href="/">جزییات پرداخت</Link>
                    </li>
                    <li>
                      <Link href="/">جزییات محصول</Link>
                    </li>
                  </ul>
                </div>
                <div className="shrink-0">
                  <Image
                    src="/images/menu-image.jpg"
                    width={208}
                    height={192}
                    alt="menu-image"
                    className="w-52"
                  />
                </div>
              </div>
            </li>
            <li>
              <Link href="/">ارتباط با ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
