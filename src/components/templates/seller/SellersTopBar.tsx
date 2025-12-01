import Link from "next/link";
import React from "react";
import { FaShop } from "react-icons/fa6";

function SellersTopBar() {
  return (
    <div className="bg-white relative rounded-2xl flex flex-col gap-y-5 md:flex-row items-center justify-between px-7 py-6">
      <div className="flex items-center gap-x-6">
        <div className="border border-gray-300 p-3 rounded-xl">
          <FaShop className="text-zinc-700 text-xl md:text-3xl" />
        </div>
        <div className="space-y-2">
          <h1 className="text-sm md:text-lg font-bold">
            لیست فروشگاه های ترازو
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            تمام فروشگاه ها معتبر است
          </p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-gray-500 text-sm md:text-base">
             برترین فروشگاه  :
             <Link href="/seller/1" className="text-yellow-500 font-bold">
              اسمارت نوین قشم
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellersTopBar;
