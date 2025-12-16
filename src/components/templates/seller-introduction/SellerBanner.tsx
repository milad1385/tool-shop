"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

function SellerBanner() {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-black/25"></div>
        <Image
          alt="seller-introduction"
          width={1920}
          height={1080}
          src="/images/seller-banner.png"
          placeholder="blur"
          blurDataURL="/images/seller-banner.png"
          className="h-[110vh] mt-20 hidden md:block object-cover"
        />

        <Image
          alt="seller-introduction"
          width={1920}
          height={1080}
          src="/images/seller-mobile.jpg"
          placeholder="blur"
          blurDataURL="/images/seller-mobile.jpg"
          className="h-[80vh] mt-20 block md:hidden object-cover"
        />

        <div className="absolute z-30 top-80 right-5 md:right-[1050px] space-y-6 w-[450px]">
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            در ترازو فروشنده شوید !
          </h3>

          <Typewriter
            onInit={(TypeWriter) => {
              TypeWriter.typeString("تنها در ترازو 12 میلیون مشتری داری")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString("تنها در ترازو به تمام نقاط ایران بفروشید")
                .start()
                .pauseFor(2000);
            }}
            options={{
              loop: true,
            }}
          />

          <Link
            href="/"
            className="block px-6 bg-yellow-600 md:bg-black text-white w-[160px] py-3 text-center text-sm rounded-lg"
          >
            ثبت نام فروشنده
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-800 to-yellow-500 px-12 py-6 rounded-xl flex items-center justify-between absolute left-8 right-8 -bottom-[550px] z-30">
        <div className="w-full space-y-5">
          <h3 className=" text-xl md:text-3xl text-white">چرا در ترازو بفروشیم ؟</h3>
          <span className="block h-[2.40px] w-20 bg-white "></span>
          <h4 className="text-white">از زبان فروشنده ها</h4>
        </div>
        <div className="w-full h-full flex items-center justify-end">
          <Image alt="image-banner" src="/images/seller-b-1.png" width={1920} height={1080} className="w-[400px] rounded-2xl"/>
        </div>
      </div>
    </div>
  );
}

export default SellerBanner;
