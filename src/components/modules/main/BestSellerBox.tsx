import { IBestSellerBox } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BestSellerBox({ name, slug, images, sellers }: IBestSellerBox) {
  const lowestPrice = Math.min(...sellers.map((s) => s.price));
  const productsQty = Math.max(...sellers.map((s) => s.stock));
  const maxDiscount = Math.max(...sellers.map((s) => s.discount || 0));
  const finalPrice = lowestPrice - (lowestPrice * maxDiscount) / 100;
  return (
    <div className="bg-white shadow rounded-3xl overflow-hidden p-4">
      <Link href={`/products/${slug}`} className="flex gap-x-2">
        <Image
          width={1920}
          height={1080}
          src={`${images[0]}`}
          alt="product 2"
          className="w-[128px]"
        />
        <div className="flex flex-col gap-y-3">
          <h2 className="font-Lalezar text-lg/[32px] mt-6">{name}</h2>
          <div className="flex items-center justify-center gap-x-3 mt-2">
            <span
              className={`text-zinc-500  text-sm lg:text-base font-IranMedium ${
                maxDiscount ? "line-through" : ""
              }`}
            >
              {formattedPrice(lowestPrice)} {maxDiscount === 0 && "تومان"}
            </span>
            {maxDiscount > 0 && (
              <span className="text-yellow-500  text-base font-IranMedium">
                {formattedPrice(finalPrice)} تومان
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="flex items-center text-sm justify-center gap-4">
        <div>
          <span className="sm:hidden xl:block">موجودی : </span> {productsQty}  از {" "}
          {productsQty}
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
