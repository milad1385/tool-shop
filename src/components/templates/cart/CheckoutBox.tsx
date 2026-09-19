import { formattedPrice } from "@/utils/helper";
import Link from "next/link";
import React from "react";

function CheckoutBox({ totalItems, totalPrice, totalDiscount, finalPrice }) {
  return (
    <div className="col-span-12 md:col-span-3">
      <div className="bg-white rounded-3xl p-8">
        <div className="flex flex-col font-Lalezar  text-lg">
          <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
            <span>تعداد خرید:</span>
            <span>{formattedPrice(totalItems)} عدد</span>
          </div>
          <div className="flex items-center justify-between p-4">
            <span>مبلغ کل:</span>
            <span>{formattedPrice(totalPrice)} تومان</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
            <span>تخفیف:</span>
            <span>{formattedPrice(totalDiscount)} تومان</span>
          </div>

          <div className="flex items-center justify-between p-4 mb-2">
            <span>مبلغ نهایی:</span>
            <span>{formattedPrice(finalPrice)} تومان</span>
          </div>
          <Link
            href="/checkout"
            className="flex items-center justify-center py-2 rounded-md bg-stone-800 hover:bg-stone-900 text-white"
          >
            ادامه دادن
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBox;
