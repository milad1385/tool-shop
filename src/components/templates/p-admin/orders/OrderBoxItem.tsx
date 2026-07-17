import Image from "next/image";
import Link from "next/link";
import React from "react";

function OrderBoxItem() {
  return (
    <div className="flex gap-x-8 items-center  py-3 text-sm md:text-base">
      <Link href="/products/1">
        <Image
          src="/images/product-3.jpg"
          alt="image 3"
          width={1920}
          height={1080}
          className="w-24"
        />
      </Link>
      <div className="block  md:hidden space-y-3 text-zinc-700">
        <Link href="/products/1">نام : دریل شارژی</Link>
        <p>نام فروشنده : فروشنده تست</p>
        <p>تعداد : 1</p>
        <p>قیمت : 350,000 تومان</p>
      </div>
      <Link href="/products/1" className="hidden md:block">نام : دریل شارژی</Link>
      <p className="hidden md:block">نام فروشنده : فروشنده تست</p>
      <p className="hidden md:block">تعداد : 1</p>
      <p className="hidden md:block">قیمت : 350,000 تومان</p>
    </div>
  );
}

export default OrderBoxItem;
