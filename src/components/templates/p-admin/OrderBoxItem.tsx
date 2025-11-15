import Image from "next/image";
import Link from "next/link";
import React from "react";

function OrderBoxItem() {
  return (
    <div className="flex gap-x-8 items-center  py-3">
      <Link href="/products/1">
        <Image
          src="/images/product-3.jpg"
          alt="image 3"
          width={1920}
          height={1080}
          className="w-24"
        />
      </Link>
      <Link href="/products/1">نام : دریل شارژی</Link>
      <p>نام فروشنده : فروشنده تست</p>
      <p>تعداد : 1</p>
      <p>قیمت : 350,000 تومان</p>
    </div>
  );
}

export default OrderBoxItem;
