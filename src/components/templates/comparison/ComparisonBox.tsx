import Image from "next/image";
import Link from "next/link";
import React from "react";

function ComparisonBox() {
  return (
    <div className="grid flex-grow card pt-2 rounded-box place-items-center border rounded-xl">
      <div className="flex items-center gap-4 border-b mb-4 pb-4">
        <div>
          <Image
            className="w-28 rounded-2xl"
            src="/images/product-1.jpg"
            alt="product-1.jpg"
            width={1920}
            height={1080}
          />
        </div>
        <div>
          <a href="single-product.html">
            <h3 className="font-Lalezar text-lg md:text-xl">
              دلر شارژی مدل دیوالت
            </h3>
          </a>
          <div className="flex justify-center gap-4 text-sm md:text-base mt-4">
            <span className="line-through text-gray-500">140,000</span>
            <span className="text-yellow-500">90,000 تومان</span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full text-sm font-medium text-zinc-700">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2">عنوان</th>
              <th className="px-4 py-2">جزئیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">مدل:</th>
              <td className="border border-gray-400 px-4 py-2">رونیکس</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">رنگ:</th>
              <td className="border border-gray-400 px-4 py-2">زرد</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">منبع تغذیه:</th>
              <td className="border border-gray-400 px-4 py-2">باتری</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">مدت زمان شارژ:</th>
              <td className="border border-gray-400 px-4 py-2">4 ساعت</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">وزن:</th>
              <td className="border border-gray-400 px-4 py-2">250 گرم</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">اقلام:</th>
              <td className="border border-gray-400 px-4 py-2">دفترچه</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">ابعاد:</th>
              <td className="border border-gray-400 px-4 py-2">60 در 40</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">ولتاژ:</th>
              <td className="border border-gray-400 px-4 py-2">18 ولت</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-12">
        <Link className="bg-yellow-500 py-2 px-4 rounded-xl font-Lalezar text-white text-base md:text-lg" href="/products/1">
          مشاهده و خرید
        </Link>
      </div>
    </div>
  );
}

export default ComparisonBox;
