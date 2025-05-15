import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";

function CommentItem() {
  return (
    <div className="p-4 border rounded-xl relative">
      <div className="bg-green-500 rounded-tl-2xl font-Lalezar text-sm text-white py-3 px-6 rounded-br-2xl absolute top-0 left-0">
        پاسخ داده شده
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10 text-sm">
        <div>
          <span>ردیف :</span>
          <span className="mr-1 text-stone-500">#1</span>
        </div>
        <div>
          <span>تاریخ:</span>
          <span className="mr-1 text-stone-500">3 خرداد 1402</span>
        </div>

        <div>
          <span>محصول:</span>
          <Link href="/products/1" className="mr-1 text-stone-500">
            دریل شارژی
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <span>امتیاز :</span>
          <div className="flex items-center gap-x-1">
            <FaRegStar className="text-xs md:text-lg text-yellow-500" />
            <FaRegStar className="text-xs md:text-lg text-yellow-500" />
            <FaRegStar className="text-xs md:text-lg text-yellow-500" />
            <FaRegStar className="text-xs md:text-lg text-gray-500" />
            <FaRegStar className="text-xs md:text-lg text-gray-500" />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex mb-6">
          <Link href="/products/1">
            <Image
              src="/images/product-3.jpg"
              alt="image 1"
              width={1920}
              height={1080}
              className="w-24"
            />
          </Link>
        </div>
        <div>
          <button className="px-8 py-2 bg-stone-800 rounded-xl text-white">
            مشاهده کامنت
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
