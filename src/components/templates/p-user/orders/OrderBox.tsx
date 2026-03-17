import Button from "@/components/ui/Button";
import { IOrderBox } from "@/libs/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function OrderBox({ className }: IOrderBox) {
  return (
    <div className={`p-6 border rounded-2xl relative ${className}`}>
      <div className="bg-green-500 rounded-tl-2xl font-Lalezar text-sm text-white py-3 px-6 rounded-br-2xl absolute top-0 left-0">
        پرداخت موفق
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10 text-sm">
        <div>
          <span>تاریخ:</span>
          <span className="mr-1 text-stone-500">3 خرداد 1402</span>
        </div>
        <div>
          <span>کد سفارش:</span>
          <span className="mr-1 text-stone-500">#246585</span>
        </div>
        <div>
          <span>تخفیف:</span>
          <span className="mr-1 text-stone-500">
            76.000 <span className="hidden md:inline-block">تومان</span>
          </span>
        </div>
        <div>
          <span>جمع سبد خرید:</span>
          <span className="mr-1 text-stone-500">
            399.000 <span className="hidden md:inline-block">تومان</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex mb-6">
          <Link href="/products/1">
            <Image
              src="/images/product-1.jpg"
              alt="image 1"
              width={1920}
              height={1080}
              className="w-24"
            />
          </Link>
          <Link href="/products/1">
            <Image
              src="/images/product-2.jpg"
              alt="image 2"
              width={1920}
              height={1080}
              className="w-24"
            />
          </Link>
          <Link href="/products/1">
            <Image
              src="/images/product-3.jpg"
              alt="image 3"
              width={1920}
              height={1080}
              className="w-24"
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <Link href="/factor/1">
            <Button className="!rounded-xl !w-[125px]">
              مشاهده فاکتور
            </Button>
          </Link>
          <Link href="/p-user/orders/1">
            <Button className="!bg-red-600 !rounded-xl !w-[125px]">
              جزییات
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderBox;
