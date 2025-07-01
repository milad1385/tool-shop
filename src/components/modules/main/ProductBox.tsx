import { IProduct } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuArrowDownUp } from "react-icons/lu";

function ProductBox({ title, discount, image, link, price }: IProduct) {
  return (
    <div className="bg-white space-y-3 rounded-3xl overflow-hidden p-4">
      <Link href={link} className="relative">
        <Image
          src={`/images/${image}`}
          alt={title}
          width={1920}
          height={1080}
          className="mx-auto w-[260px]"
        />
        {discount && (
          <span className="bg-[#eab308] w-[40px]  h-[40px] flex-center text-sm rounded-full absolute top-1 right-1">
            {discount}%
          </span>
        )}
      </Link>
      <div>
        <Link
          href={link}
          className="flex-center font-Lalezar text-base md:text-lg"
        >
          {title}
        </Link>
        <div className="flex items-center justify-center gap-x-3 mt-4">
          <span className={`text-zinc-700 flex items-center gap-x-1 ${discount ? "line-through" : ""}`}>
            {formattedPrice(price)} <span className="sm:hidden lg:block">تومان</span>
          </span>
          {discount && (
            <span className="text-yellow-500 flex items-center gap-x-1">
              {formattedPrice(price - (price * discount) / 100)}{" "}
              <span className="sm:hidden lg:block">تومان</span>
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-3 mt-4">
        <div className="bg-yellow-500 p-2 text-white rounded-lg md:cursor-pointer">
          <HiOutlineShoppingBag className="text-2xl" />
        </div>
        <div className="bg-yellow-500 p-2 text-white rounded-lg md:cursor-pointer">
          <LuArrowDownUp className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
