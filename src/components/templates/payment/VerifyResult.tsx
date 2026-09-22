"use client";

import Button from "@/components/ui/Button";
import { IVerifyResult } from "@/libs/types";
import Link from "next/link";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function VerifyResult({
  success,
  message,
  orderId,
  orderNumber,
  failed,
}: IVerifyResult) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-lg">
        <div className="flex justify-center mb-6">
          {success ? (
            <div className="bg-green-100 rounded-full p-6">
              <FaCheckCircle className="text-green-500 text-5xl" />
            </div>
          ) : (
            <div className="bg-red-100 rounded-full p-6">
              <FaTimesCircle className="text-red-500 text-5xl" />
            </div>
          )}
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          {success ? "پرداخت موفق" : failed ? "پرداخت لغو شد" : "پرداخت ناموفق"}
        </h1>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          {message}
        </p>

        {orderNumber && success && (
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <span className="text-xs text-gray-500 block mb-1">
              شماره سفارش
            </span>
            <span className="font-bold text-gray-800 font-mono">
              {orderNumber}
            </span>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {success && orderId ? (
            <>
              <Link href={`/p-user/orders/${orderId}`} className="w-full">
                <Button className="!w-full !bg-green-500 hover:!bg-green-600">
                  مشاهده سفارش
                </Button>
              </Link>
              <Link href="/" className="w-full">
                <Button className="!w-full !bg-stone-800 hover:!bg-stone-900">
                  بازگشت به صفحه اصلی
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/checkout" className="w-full">
                <Button className="!w-full !bg-yellow-500 hover:!bg-yellow-600">
                  تلاش مجدد
                </Button>
              </Link>
              <Link href="/cart" className="w-full">
                <Button className="!w-full !bg-stone-800 hover:!bg-stone-900">
                  بازگشت به سبد خرید
                </Button>
              </Link>
            </>
          )}
        </div>

        {success && orderId && (
          <p className="text-xs text-gray-400 mt-6">
            به صورت خودکار به صفحه سفارش منتقل می‌شوید...
          </p>
        )}
      </div>
    </div>
  );
}

export default VerifyResult;
