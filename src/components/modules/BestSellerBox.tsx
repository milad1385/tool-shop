import { formattedPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BestSellerBox({
  title,
  discount,
  image,
  link,
  price,
  id,
  quantity,
}: IBestSellerBox) {
  return (
    <div className="bg-white shadow rounded-3xl overflow-hidden p-4">
      <Link href={link} className="flex gap-x-2">
        <Image
          width={1920}
          height={1080}
          src={`/images/${image}`}
          alt="product 2"
          className="w-[128px]"
        />
        <div className="flex flex-col gap-y-3">
          <h2 className="font-Lalezar text-lg mt-6">{title}</h2>
          <div className="flex items-center justify-center gap-x-3 mt-2">
            <span
              className={`text-zinc-700  text-sm lg:text-base font-IranMedium ${
                true ? "line-through" : ""
              }`}
            >
              {formattedPrice(price)} تومان
            </span>
            {true && (
              <span className="text-yellow-500  text-sm lg:text-base font-IranMedium">
                {formattedPrice(price - (price * discount) / 100)} تومان
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="flex items-center text-sm justify-center gap-4">
        <div>
          <span className="sm:hidden xl:block">موجودی : </span> {quantity} از 20
        </div>
        <div>
          <progress
            className="progress progress-warning w-48 md:w-56"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
}

export default BestSellerBox;
