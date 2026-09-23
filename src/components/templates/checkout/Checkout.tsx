"use client";
import { POSTAL_SEND_PRICE } from "@/constants/data";
import { ICheckout } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";

function Checkout({
  totalItems,
  totalPrice,
  totalDiscount,
  finalPrice,
}: ICheckout) {
  return (
    <div className="col-span-12 md:col-span-3">
      <div className="bg-white rounded-3xl p-5 md:p-8">
        <div className="flex flex-col font-Lalezar  text-base">
          <div className="flex items-center justify-between p-4 text-sm md:text-base">
            <span>مبلغ کل ({formattedPrice(totalItems)}) : </span>
            <span className="text-zinc-700">
              {formattedPrice(totalPrice)} تومان
            </span>
          </div>
          <div className="flex items-center justify-between p-4 text-sm md:text-base bg-yellow-100 rounded-lg">
            <span>هزینه ارسال : </span>
            <span>{formattedPrice(POSTAL_SEND_PRICE)} تومان</span>
          </div>
          <div className="flex items-center justify-between p-4 text-sm md:text-base">
            <span>سود شما : </span>
            <span className="text-zinc-700">
              {formattedPrice(totalDiscount)} تومان
            </span>
          </div>
          <div className="flex items-center justify-between p-4 text-sm md:text-base bg-yellow-100 rounded-lg mb-4">
            <span>مبلغ نهایی:</span>
            <span className="text-zinc-700">
              {formattedPrice(finalPrice + POSTAL_SEND_PRICE)} تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
