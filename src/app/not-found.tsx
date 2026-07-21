import Link from "next/link";
import { FaShop } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="md:min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-12 relative overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>

        <div className="relative">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaShop className="text-base md:text-xl text-white" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-400">کد خطا</p>
                <p className="text-xs md:text-sm font-bold text-gray-900">
                  ۴۰۴
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 md:px-3 md:py-1 bg-yellow-100 text-yellow-700 text-[10px] md:text-xs font-medium rounded-full whitespace-nowrap">
              صفحه پیدا نشد
            </span>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-Lalezar leading-tight">
              اوه! این صفحه رو پیدا نکردیم
            </h2>

            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              صفحه‌ای که به دنبالش هستید ممکنه حذف شده باشه، نامش تغییر کرده
              باشه یا موقتاً در دسترس نباشه.
            </p>

            {/* Search suggestion */}
            <div className="bg-gray-50 rounded-xl p-3 md:p-4 flex items-start md:items-center gap-2 md:gap-3">
              <span className="text-yellow-500 text-base md:text-lg flex-shrink-0 mt-0.5 md:mt-0">
                💡
              </span>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                پیشنهاد: از{" "}
                <span className="font-medium text-gray-800">صفحه اصلی</span> یا{" "}
                <span className="font-medium text-gray-800">
                  دسته‌بندی محصولات
                </span>{" "}
                شروع کنید
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2">
              <Link
                href="/"
                className="flex-1 min-w-[120px] sm:min-w-[140px] text-center px-4 md:px-6 py-2.5 md:py-3 bg-yellow-500 text-white font-medium rounded-xl hover:bg-yellow-600 transition-colors duration-200 shadow-sm hover:shadow-md text-sm md:text-base"
              >
                صفحه اصلی
              </Link>
              <Link
                href="/products"
                className="flex-1 min-w-[120px] sm:min-w-[140px] text-center px-4 md:px-6 py-2.5 md:py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-yellow-500 hover:text-yellow-500 transition-all duration-200 text-sm md:text-base"
              >
                همه محصولات
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 md:gap-x-6 gap-y-2 text-xs md:text-sm">
              <Link
                href="/about"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                درباره ما
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                وبلاگ
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
