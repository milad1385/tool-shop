"use client";
import { POSTAL_SEND_PRICE } from "@/constants/data";
import { IFactorDetails } from "@/libs/types";
import { formatDate, formattedPrice } from "@/utils/helper";
import Link from "next/link";
import React from "react";

function FactorDetails({ factor }: IFactorDetails) {
  const printFactorHandler = () => {
    if (window.print) {
      window.print();
    } else {
      alert("مرورگر شما از قابلیت چاپ پشتیبانی نمی کند ، لطفا آپدیت کنید");
    }
  };
  return (
    <div className="container py-10">
      <h1 className="text-base md:text-lg lg:text-2xl font-DanaDemiBold text-center">
        صورت حساب فروش کالا
      </h1>
      <div className="space-y-4 mt-4">
        <div className="font-DanaMedium">
          شماره سفارش :
          <span className="font-DanaDemiBold">{factor.orderNumber}</span>
        </div>
        <div className="font-DanaMedium">
          تاریخ سفارش :
          <span className="font-DanaDemiBold">
            {formatDate(factor.createdAt)}
          </span>
        </div>
      </div>
      {/* <div className="py-6  mt-4 w-full text-sm md:text-base border-b border-b-gray-300">
        <h2 className="mx-auto pb-3 flex-center flex-col font-DanaDemiBold text-sm  md:text-lg border-b border-gray-300 w-full">
          مشخصات فروشنده
        </h2>
        {factor.items.map((item) => (
          <div key={item._id} className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
            <div className="font-DanaMedium">
              نام شخص حقیقی / حقوقی :{" "}
              <span className="font-DanaDemiBold text-gray-700">
                {item.seller.}
              </span>
            </div>
            <div className="font-DanaMedium">
              کد پیگیری:{" "}
              <span className="font-DanaDemiBold text-gray-700">
                {factor.trackingCode}#
              </span>
            </div>
            <div className="font-DanaMedium">
              شماره ثبت / ملی :{" "}
              <span className="font-DanaDemiBold text-gray-700">----</span>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            آدرس :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {factor.address.address}
            </span>
          </div>
          <div className="font-DanaMedium">
            کد پستی :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {factor.address.postalCode}
            </span>
          </div>
          <div className="font-DanaMedium">
            تلفن: <span className="font-DanaDemiBold text-gray-700"></span>
          </div>
        </div>
      </div> */}
      <div className="pb-6  mt-4 w-full text-sm md:text-base border-b border-b-gray-300">
        <h2 className="mx-auto pb-3 flex-center flex-col font-DanaDemiBold text-sm  md:text-lg border-b border-gray-300 w-full">
          مشخصات خریدار
        </h2>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            نام تحویل گیرنده :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {factor.address.name}
            </span>
          </div>
          <div className="font-DanaMedium">
            ایمیل :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              <a href={`mailto:${factor.user.email}`}>{factor.user.email}</a>
            </span>
          </div>
          <div className="font-DanaMedium">
            تاریخ تحویل:
            <span className="font-DanaDemiBold text-gray-700">
              {factor.status === "delivered" ? "1404/05/25" : "در حال پردازش"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            آدرس :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {factor.address.address}
            </span>
          </div>
          <div className="font-DanaMedium">
            کد پستی :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {factor.address.postalCode}
            </span>
          </div>
          <div className="font-DanaMedium">
            تلفن:{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {factor.address.mobile}
            </span>
          </div>
        </div>
      </div>
      <div className="pb-6  mt-4 w-full text-sm md:text-base">
        <h2 className="text-center pb-3 font-DanaDemiBold text-sm  md:text-lg border-b border-gray-300 w-full">
          مشخصات محصولات
        </h2>
        <div className="table-container scorll-bar">
          <table className="mt-4">
            <thead>
              <tr className="child:pb-4">
                <th>ردیف</th>
                <th>نام</th>
                <th>فروشنده</th>
                <th>تعداد</th>
                <th>مبلغ کل</th>
                <th>مبلغ تخفیف </th>
                <th>مبلغ نهایی </th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {factor.items.map((item, index) => (
                <tr
                  key={item._id}
                  className="!bg-gray-100 text-center child:p-4 !border-1"
                >
                  <td>{index + 1}</td>
                  <td>
                    <Link href={`/products/${item.product.slug}`}>
                      {item.product.name.slice(0, 20)}
                    </Link>
                  </td>
                  <td>{item.seller.name}</td>
                  <td>{item.quantity}</td>
                  <td>{formattedPrice(item.price * item.quantity)}</td>
                  <td>
                    {formattedPrice(
                      ((item.price * item.discount) / 100) * item.quantity,
                    )}
                  </td>
                  <td>{formattedPrice(item.finalPrice * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 space-y-3">
          <div className="border-b border-b-gray-300 pb-4">
            مبلغ کل :{" "}
            <span className="font-DanaDemiBold">
              {formattedPrice(factor.totalPrice)} تومان
            </span>
          </div>

          <div className="border-b border-b-gray-300 pb-4">
            سود شما از این خرید :{" "}
            <span className="font-DanaDemiBold">
              {formattedPrice(factor.totalDiscount)} تومان
            </span>
          </div>
          <div className="border-b border-b-gray-300 pb-4">
            هزینه ارسال مرسوله:{" "}
            <span className="font-DanaDemiBold">
              {formattedPrice(POSTAL_SEND_PRICE)} تومان
            </span>
          </div>
          <div className="border-b border-b-gray-300 pb-4">
            مبلغ پرداختی :{" "}
            <span className="font-DanaDemiBold">
              {formattedPrice(factor.finalPrice)} تومان
            </span>
          </div>
          <div className="border-b border-b-gray-300 pb-4 grid grid-cols-6">
            <div>امضا خریدار</div>
            <div>امضا فروشنده</div>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded-md font-DanaMedium print-btn"
            onClick={printFactorHandler}
          >
            پرینت فاکتور
          </button>
        </div>
        <h4 className="text-center font-DanaDemiBold text-sm md:text-lg mt-6">
          متشکریم از خرید شما {factor.user.fullname} ، امیدوارم نهایت رضایت رو
          داشته باشید ❤️
        </h4>
      </div>
    </div>
  );
}

export default FactorDetails;
