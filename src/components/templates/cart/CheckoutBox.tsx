import React from "react";

function CheckoutBox() {
  return (
    <div className="col-span-12 md:col-span-3">
      <div className="bg-white rounded-3xl p-8">
        <div className="flex flex-col font-Lalezar  text-lg">
          <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
            <span>تعداد خرید:</span>
            <span>2 عدد</span>
          </div>
          <div className="flex items-center justify-between p-4">
            <span>مبلغ کل:</span>
            <span>300.000 تومان</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
            <span>هزینه ارسال:</span>
            <span>140.000</span>
          </div>
          <div className="flex items-center justify-between p-4">
            <span>مبلغ نهایی:</span>
            <span>440.000</span>
          </div>
          <button className="py-2 rounded-md bg-stone-800 hover:bg-stone-900 text-white">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBox;
