import Link from "next/link";
import React from "react";

function TicketItem() {
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
          <span>دپارتمان:</span>
          <span className="mr-1 text-stone-500">پشتیبانی</span>
        </div>
        <div className="flex items-center gap-x-2">
          <span>واحد :</span>
          <span className="mr-1 text-stone-500">پشتیبانی فنی</span>
        </div>
      </div>

      <div className="flex items-end justify-end">
        <Link href="/p-user/tickets/1" className="px-8 py-2 bg-stone-800 rounded-xl text-white">
          مشاهده تیکت
        </Link>
      </div>
    </div>
  );
}

export default TicketItem;
