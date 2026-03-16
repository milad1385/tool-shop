import React from "react";

function OrderDetails() {
  return (
    <div className="mt-5 space-y-4 divide-y-2 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2>
            <span className="font-Lalezar">شناسه سفارش </span>: #652655
          </h2>
          <h3>
            <span className="font-Lalezar">کد پیگیری سفارش </span> :
            656325623658
          </h3>
        </div>
        <div>
          <div className="bg-green-500 px-4 py-2 rounded-md text-white">
            وضعیت سفارش : پرداخت شده
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 pt-3">
        <h2>
          <span className="font-Lalezar">نام سفارش دهنده </span>: میلاد سلامیان
        </h2>
        <h3>
          <span className="font-Lalezar">نام فروشگاه </span> : پیشگامان نوین
        </h3>
        <h3>
          <span className="font-Lalezar">شماره </span> : 09336085012
        </h3>
        <h3>
          <span className="font-Lalezar">آدرس </span> : استان البرز ، کرج
        </h3>
      </div>
      <div className="flex items-center gap-4 pt-3">
        <h2>
          <span className="font-Lalezar">تاریخ سفارش </span>: 1404/5/12
        </h2>
        <h3>
          <span className="font-Lalezar">ساعت سفارش </span> : 16:18
        </h3>
      </div>
      <div className="flex items-center gap-4 pt-3">
        <h2>
          <span className="font-Lalezar">تاریخ دریافت </span>: 1404/5/16
        </h2>
        <h3>
          <span className="font-Lalezar">بازه تحویل کالا </span> : از 8 تا 12
        </h3>
        <h3>
          <span className="font-Lalezar">کد جهت تحویل </span> : 256568
        </h3>
      </div>
      <div className="flex items-center gap-4 pt-3">
        <h2>
          <span className="font-Lalezar">مبلغ کل سفارش </span>: 12,000,000 تومان
        </h2>
        <h3>
          <span className="font-Lalezar">مبلغ تخفیف </span> : 250,000 تومان
        </h3>
      </div>
    </div>
  );
}

export default OrderDetails;
