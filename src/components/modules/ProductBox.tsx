import Image from "next/image";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuArrowDownUp } from "react-icons/lu";

function ProductBox() {
  return (
    <div className="bg-white shadow rounded-2xl overflow-hidden p-4">
      <div className="relative">
        <Image
          src="/images/product-1.jpg"
          alt="product-1.jpg"
          width={1920}
          height={1080}
          className="mx-auto w-[260px]"
        />
        <span className="bg-[#eab308] w-[40px]  h-[40px] flex-center text-sm rounded-full absolute top-1 right-1">30%</span>
      </div>
      <div>
        <h2 className="text-center font-Lalezar text-base md:text-lg">
          دستگاه جوشکاری
        </h2>
        <div className="flex items-center justify-center gap-x-3 mt-2">
          <span className="text-zinc-700 line-through">630,000 تومان</span>
          <span className="text-yellow-500">400,000 تومان</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-3 mt-4">
        <div className="bg-yellow-500 p-2 text-white rounded-lg md:cursor-pointer">
          <HiOutlineShoppingBag className="text-2xl" />
        </div>
        <div className="bg-yellow-500 p-2 text-white rounded-lg md:cursor-pointer">
        <LuArrowDownUp className="text-2xl"/>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
