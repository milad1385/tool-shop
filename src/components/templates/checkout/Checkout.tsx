function Checkout() {
  return (
    <div className="col-span-12 md:col-span-3">
      <div className="bg-white rounded-3xl p-8">
        <div className="flex flex-col font-Lalezar  text-base">
          <div className="flex items-center justify-between p-4">
            <span>مبلغ کل (2) : </span>
            <span>300.000 تومان</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
            <span>ارسال عادی : </span>
            {/* <span>140.000</span> */}
            <span className="text-sm text-zinc-800">مشخص نشده</span>
          </div>
          <div className="flex items-center justify-between p-4">
            <span>سود شما : </span>
            <span>100.000 تومان</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg mb-4">
            <span>مبلغ نهایی:</span>
            <span>200.000 تومان</span>
          </div>
          <button className="flex items-center justify-center py-2 rounded-md bg-stone-800 hover:bg-stone-900 text-white">
            پرداخت
          </button>
          {/* <button className="flex items-center justify-center py-2 rounded-md border-2 border-stone-800 mt-5 hover:bg-stone-800 hover:text-white transition-all">
            انتخاب زمان ارسال
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
