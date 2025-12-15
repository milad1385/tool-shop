import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-yellow-600 py-6 px-4 fixed top-0 left-0 right-0 z-40">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo.png"
          className="w-[100px] md:w-[124px] h-[35px] md:h-[41px] select-none"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex items-center gap-x-4">
        <Link href="/" className="text-sm text-white">
          ورود به پنل فروشندگان
        </Link>
        <button className="px-16 py-2 border-2 text-white border-white rounded-lg text-sm">
          ثبت نام
        </button>
      </div>
    </div>
  );
}

export default Navbar;
