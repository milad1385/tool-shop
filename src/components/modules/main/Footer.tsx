"use client";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import {
  FaInstagram,
  FaPhone,
  FaRegEnvelope,
  FaTelegram,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FooterMenu from "./FooterMenu";
import FooterSlider from "./FooterSlider";

function Footer() {
  const pathname = usePathname();
  if (
    pathname.includes("/auth") ||
    pathname.includes("/p-user") ||
    pathname.includes("/p-admin")
  )
    return null;
  return (
    <>
      <footer className="bg-stone-800 mt-10  py-10 md:py-8 md:pb-8 md:pt-[62px]">
        <div className="w-[98%] lg:w-[90%] mx-auto px-2.5 md:px-0">
          <FooterSlider />
          <div className="text-gray-300 flex flex-wrap  justify-between border-b border-b-white/20 pb-4">
            <div>
              <div className="flex items-center gap-x-4 mb-3">
                <Image
                  src="/images/logo.png"
                  alt="logo.png"
                  className="w-[124px] h-[41px]"
                  width={1920}
                  height={1080}
                />
              </div>
              <p className="md:text-base/[32px] text-sm/[28px] xl:max-w-[600px] font-Iran text-justify">
                سلام ، میلاد سلامیان هستم ، ترازو با فراهم آوردن تنوع معقولی از
                محصولات در کنار عرضه با قیمت مناسب آن‌ها، به دنبال خرید راحت و
                رضایت‌بخش ابزارآلات برای همراهان خودش است و این مهم را با مهیا
                کردن امکان بررسی فنی و کاربردی ابزارآلات و ارائه محتوای مناسب و
                غنی محقق می‌سازد.
              </p>
            </div>
            <div className="mt-[26px]">
              <h3 className="text-lg md:text-xl font-IranMedium text-white">
                دسترسی سریع
              </h3>
              <div className="grid grid-cols-2 mt-6 gap-x-3.5 font-Iran">
                <div className="flex flex-col gap-y-2.5 text-sm md:text-base">
                  <a
                    href="#"
                    className="flex items-center gap-x-1.5 md:gap-x-2.5"
                  >
                    <span className="block w-2.5 h-1 bg-gray-100 rounded-full"></span>
                    حریم خصوصی
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-x-1.5 md:gap-x-2.5"
                  >
                    <span className="block w-2.5 h-1 bg-gray-100 rounded-full"></span>
                    شرایط استفاده
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-x-1.5 md:gap-x-2.5"
                  >
                    <span className="block w-2.5 h-1 bg-gray-100 rounded-full"></span>
                    پرسش های متدوال
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-x-1.5 md:gap-x-2.5"
                  >
                    <span className="block w-2.5 h-1 bg-gray-100 rounded-full"></span>
                    ضمانت نامه ها
                  </a>
                </div>
                <div className="flex flex-col gap-y-2.5 text-sm md:text-base">
                  <Link
                    href="#"
                    className="flex items-center gap-x-1.5 md:gap-x-2.5"
                  >
                    <span className="block w-2.5 h-1 bg-gray-100 rounded-full"></span>
                    عودت کالا
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-x-1.5 md:gap-x-2.5"
                  >
                    <span className="block w-2.5 h-1 bg-gray-100 rounded-full"></span>
                    ثبت سفارش
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-x-1.5 md:gap-x-2.5"
                  >
                    <span className="block w-2.5 h-1 bg-gray-100 rounded-full"></span>
                    فرصت های شغلی
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-x-1.5 md:gap-x-2.5"
                  >
                    <span className="block w-2.5 h-1 bg-gray-100 rounded-full"></span>
                    ارتباط با ما
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[23px]">
              <h3 className="text-lg md:text-xl font-IranMedium text-white">
                {" "}
                در تماس باشید
              </h3>
              <div className="flex items-center gap-x-1.5 mt-6">
                <LuMapPin className="text-white text-lg" />
                <p>ایران ، تهران ، میدان آزادی ، شرکت ترازو</p>
              </div>
              <div className="mt-4 flex items-center flex-wrap gap-x-2.5">
                <div className="flex items-center gap-x-2 text-yellow-500">
                  <FaRegEnvelope className="text-white" />
                  <a href="mailto:trazo@gmail.com">trazo@gmail.com</a>
                </div>
                <div className="flex items-center gap-x-2">
                  <p>09336085012</p>
                  <FaPhone className="text-white" />
                </div>
                <p className="mt-2 md:mt-0">026-36512345</p>
              </div>
              <div className="flex items-center text-base md:text-lg gap-x-6 mt-3">
                <a
                  href="#"
                  className="ltr-text flex-grow gap-x-2 text-sm md:text-base text-yellow-500 border border-yellow-500 rounded-xl flex-center  h-12"
                >
                  Trazo-Shop@
                  <FaInstagram className="text-pink-700 text-lg md:text-2xl mb-[3px]" />
                </a>
                <a
                  href="#"
                  className="ltr-text flex-grow gap-x-2 text-sm md:text-base bg-gradient-to-r from-yellow-200 to-yellow-500 text-zinc-700 rounded-xl flex-center  h-12"
                >
                  Trazo-Shop@
                  <FaTelegram className="text-sky-600 text-lg md:text-2xl mb-[3px]" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs md:text-base text-gray-300 font-IranMedium flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-x-2.5">
              <div className="flex-center shrink-0 w-[30px] h-[30px] border border-white/10 rounded-full">
                <div className="flex-center w-5 h-5 border border-white/20 rounded-full">
                  <div className="w-2.5 h-2.5 bg-gradient-to-t from-yellow-300 to-yellow-200 rounded-full"></div>
                </div>
              </div>
              <p>
                تمام حقوق این سایت ، متعلق به ترازو میباشد (توسعه داده شده با{" "}
                <span className="text-red-600 text-lg md:text-2xl">❤</span> توسط
                میلاد سلامیان در ترازو)
              </p>
            </div>
            <div className="mr-auto mt-2 md:mt-0">
              .Copyright © 2025 Trazo All right reserved
            </div>
          </div>
        </div>
      </footer>
      <FooterMenu />
    </>
  );
}

export default Footer;
