"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OrderBoxItem from "./OrderBoxItem";

function OrderBox() {
  const router = useRouter();
  return (
    <div className="p-4 sm:p-6 border rounded-2xl bg-white relative">
      {/* وضعیت سفارش */}
      <div className="bg-green-500 rounded-tl-2xl font-Lalezar text-xs sm:text-sm text-white py-2 sm:py-3 px-4 sm:px-6 rounded-br-2xl absolute top-0 left-0">
        تحویل داده شده
      </div>

      {/* اطلاعات کاربر */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-x-3 font-bold mt-6 sm:mt-0">
        <h3 className="text-sm sm:text-base">نام و نام خانوادگی : میلاد سلامیان</h3>
        <h3 className="text-sm sm:text-base">استان : البرز</h3>
        <h3 className="text-sm sm:text-base">شهر : کرج</h3>
      </div>

      {/* اطلاعات سفارش */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 my-6 sm:my-10 text-xs sm:text-sm">
        <div>
          <span>تاریخ:</span>
          <span className="mr-1 text-stone-500">3 خرداد 1402</span>
        </div>
        <div>
          <span>کد سفارش:</span>
          <span className="mr-1 text-stone-500">#246585</span>
        </div>
        <div>
          <span>تخفیف:</span>
          <span className="mr-1 text-stone-500">
            76.000 <span className="hidden sm:inline-block">تومان</span>
          </span>
        </div>
        <div>
          <span>جمع سبد خرید:</span>
          <span className="mr-1 text-stone-500">
            399.000 <span className="hidden sm:inline-block">تومان</span>
          </span>
        </div>
      </div>

      {/* تصاویر محصولات */}
      <div className="flex flex-wrap gap-2 sm:gap-0 sm:flex-nowrap justify-center sm:justify-start mb-4 sm:mb-6">
        <Link href="/products/1" className="flex-shrink-0">
          <Image
            src="/images/product-1.jpg"
            alt="image 1"
            width={1920}
            height={1080}
            className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover rounded-lg"
          />
        </Link>
        <Link href="/products/2" className="flex-shrink-0">
          <Image
            src="/images/product-2.jpg"
            alt="image 2"
            width={1920}
            height={1080}
            className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover rounded-lg"
          />
        </Link>
        <Link href="/products/3" className="flex-shrink-0">
          <Image
            src="/images/product-3.jpg"
            alt="image 3"
            width={1920}
            height={1080}
            className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover rounded-lg"
          />
        </Link>
      </div>

      {/* آیتم‌های سفارش */}
      <div className="divide-y-2 divide-gray-300">
        <OrderBoxItem />
        <OrderBoxItem />
        <OrderBoxItem />
      </div>

      {/* دکمه مشاهده فاکتور */}
      <div className="flex items-center justify-end mt-4">
        <button
          onClick={() => router.push(`/factor/1`)}
          className="px-6 sm:px-8 py-2 bg-stone-800 rounded-xl text-white text-sm sm:text-base hover:bg-stone-700 transition-colors"
        >
          مشاهده فاکتور
        </button>
      </div>
    </div>
  );
}

export default OrderBox;