"use client";
import Link from "next/link";
import React from "react";

function FactorDetails() {
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
          شماره سفارش :<span className="font-DanaDemiBold">#6532352</span>
        </div>
        <div className="font-DanaMedium">
          تاریخ سفارش :
          <span className="font-DanaDemiBold">
            {new Date(Date.now()).toLocaleDateString("fa-IR")}
          </span>
        </div>
      </div>
      <div className="py-6  mt-4 w-full text-sm md:text-base border-b border-b-gray-300">
        <h2 className="mx-auto pb-3 flex-center flex-col font-DanaDemiBold text-sm  md:text-lg border-b border-gray-300 w-full">
          مشخصات فروشنده
        </h2>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            نام شخص حقیقی / حقوقی :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              میلاد سلامیان
            </span>
          </div>
          <div className="font-DanaMedium">
            شماره اقتصادی:{" "}
            <span className="font-DanaDemiBold text-gray-700">25452358</span>
          </div>
          <div className="font-DanaMedium">
            شماره ثبت / ملی :{" "}
            <span className="font-DanaDemiBold text-gray-700">94548415</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            آدرس :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              کرج ، فردیس ، کانال غربی
            </span>
          </div>
          <div className="font-DanaMedium">
            کد پستی :{" "}
            <span className="font-DanaDemiBold text-gray-700">25452358</span>
          </div>
          <div className="font-DanaMedium">
            تلفن:{" "}
            <span className="font-DanaDemiBold text-gray-700">02636578952</span>
          </div>
        </div>
      </div>
      <div className="pb-6  mt-4 w-full text-sm md:text-base border-b border-b-gray-300">
        <h2 className="mx-auto pb-3 flex-center flex-col font-DanaDemiBold text-sm  md:text-lg border-b border-gray-300 w-full">
          مشخصات خریدار
        </h2>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            نام شخص حقیقی / حقوقی :{" "}
            <span className="font-DanaDemiBold text-gray-700">محمد اکبری</span>
          </div>
          <div className="font-DanaMedium">
            ایمیل :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              <a href="mailto:mohammad@gamil.com">Mohammad@gmail.com</a>
            </span>
          </div>
          <div className="font-DanaMedium">
            تاریخ تحویل:
            <span className="font-DanaDemiBold text-gray-700">1404/05/25</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            آدرس :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              استان البرز ، کرج خیابان ساختمان 25 پلاک 23 واحد 6
            </span>
          </div>
          <div className="font-DanaMedium">
            کد پستی :{" "}
            <span className="font-DanaDemiBold text-gray-700">3187771478</span>
          </div>
          <div className="font-DanaMedium">
            تلفن:{" "}
            <span className="font-DanaDemiBold text-gray-700">09336085016</span>
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
                <th>کد کالا</th>
                <th>نام</th>
                <th>تعداد</th>
                <th>مبلغ کل</th>
                <th>مبلغ تخفیف </th>
                <th>مبلغ نهایی </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="!bg-gray-100 text-center child:p-4 !border-1">
                <td>1</td>
                <td>
                  <Link href="/products/1">دریل چند حالته رونیکس</Link>
                </td>
                <td>25</td>
                <td>15,000,000</td>
                {/* <td>
                  {(
                    item.product.price +
                    ((item.product.price * item.product.off) / 100) * item.qty
                  ).toLocaleString("fa")}
                </td> */}
                <td>85,000,000</td>
                {/* <td>
                  {(
                    (item.product.price * item.qty * item.product.off) /
                    100
                  ).toLocaleString("fa")}
                </td> */}
                <td>25,000,000</td>
                {/*{(item.price * item.qty).toLocaleString("fa")}</td> */}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 space-y-3">
          <div className="border-b border-b-gray-300 pb-4">
            مبلغ کل :{" "}
            <span className="font-DanaDemiBold">85,000,000 تومان</span>
          </div>
          <div className="border-b border-b-gray-300 pb-4">
            مبلغ پرداختی :{" "}
            <span className="font-DanaDemiBold">83,000,000 تومان</span>
          </div>
          <div className="border-b border-b-gray-300 pb-4">
            سود شما از این خرید :{" "}
            <span className="font-DanaDemiBold">2,000,000 تومان</span>
          </div>
          <div className="border-b border-b-gray-300 pb-4 grid grid-cols-6">
            <div>امضا خریدار</div>
            <div>امضا فروشنده</div>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded-md font-DanaMedium"
            onClick={printFactorHandler}
          >
            پرینت فاکتور
          </button>
        </div>
        <h4 className="text-center font-DanaDemiBold text-sm md:text-lg mt-6">
          متشکریم از خرید شما {"میلاد سلامیان"} ، امیدوارم نهایت رضایت رو داشته
          باشید ❤️
        </h4>
      </div>
    </div>
  );
}

export default FactorDetails;
