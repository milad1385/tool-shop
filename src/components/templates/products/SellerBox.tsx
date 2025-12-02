import { FaRegCircleCheck, FaShop } from "react-icons/fa6";
import { LuTruck } from "react-icons/lu";

function SellerBox() {
  return (
    <div className="flex items-center justify-between py-10">
      <div className="flex items-center gap-x-4">
        <div>
          <FaShop className="text-zinc-600 text-2xl" />
        </div>
        <div className="flex flex-col gap-y-2.5">
          <div className="flex items-center gap-x-2">
            <p className="text-gray-700 font-bold">اسمارت تکنولوژی قشم</p>
            <div className="bg-green-500 rounded-xl text-white px-2 py-0.5 text-sm">
              منتخب
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-zinc-500 text-sm">
            <p>
              <span className="text-green-500 font-bold">۱۰۰%</span> رضایت از
              کالا
            </p>
            <div className="w-[0.5px] h-5 bg-gray-300"></div>
            <p>
              عملکرد <span className="text-green-500 font-bold">عالی</span>
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-x-2">
          <LuTruck className="text-zinc-600 text-2xl" />
          <p className="text-sm text-zinc-500">ارسال توسط ترازو</p>
        </div>
        <p className="text-xs text-zinc-500">
          ارسال سریع دیجی‌کالا (تهران و مشهد)
        </p>
      </div>
      <div className="flex items-center gap-x-3">
        <FaRegCircleCheck className="text-zinc-600 text-2xl" />
        <p className="text-zinc-700 text-sm">گارانتی ۱۸ ماهه کسری پارس</p>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-2">
          <span className="line-through text-zinc-400 text-xs">۷,۶۰۰,۰۰۰</span>
          <span className="font-bold text-base md:text-lg">
            ۶,۹۹۰,۰۰۰ <span className="text-xs tracking-tighter">تومان</span>
          </span>
          <span className="block bg-yellow-500 text-white px-2.5 rounded-xl text-sm">۸٪</span>
        </div>

        <button className="bg-yellow-500 text-white rounded-lg px-3 py-3">افزودن به سبد خرید</button>
      </div>
    </div>
  );
}

export default SellerBox;
