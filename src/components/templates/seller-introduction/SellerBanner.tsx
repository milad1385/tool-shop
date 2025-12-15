"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

function SellerBanner() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/15"></div>
      <Image
        alt="seller-introduction"
        width={1920}
        height={1080}
        src="/images/seller-banner.png"
        placeholder="blur"
        blurDataURL="/images/seller-banner.png"
        className="h-[110vh] mt-20"
      />

      <div className="absolute z-30 top-80 left-8 space-y-6 w-[450px]">
        <h3 className="text-4xl font-bold text-white">
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

        <Link href="/" className="block px-6 bg-black text-white w-[160px] py-3 text-center text-sm rounded-lg">ثبت نام فروشنده</Link>
      </div>
    </div>
  );
}

export default SellerBanner;
