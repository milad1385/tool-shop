import { ISellerBox } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";
import { FaRegCircleCheck, FaShop } from "react-icons/fa6";
import { LuTruck } from "react-icons/lu";

function SellerBox({ seller, discount, price, stock }: ISellerBox) {
  const finalPrice = price - (price * discount) / 100;

  return (
    <div className="flex items-center justify-between py-10">
      <div className="flex items-center gap-x-4">
        <div>
          <FaShop className="text-zinc-600 text-2xl" />
        </div>
        <div className="flex flex-col gap-y-2.5">
          <div className="flex items-center gap-x-2">
            <p className="text-gray-700 font-bold">{seller.name}</p>
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
          <span
            className={
              discount
                ? `line-through text-zinc-400 text-xs`
                : `font-bold text-base md:text-lg`
            }
          >
            {formattedPrice(price)}{" "}
            {discount === 0 && (
              <span className="text-xs tracking-tighter">تومان</span>
            )}
          </span>
          {discount > 0 && (
            <>
              <span className="font-bold text-base md:text-lg">
                {formattedPrice(finalPrice)}{" "}
                <span className="text-xs tracking-tighter">تومان</span>
              </span>
              <span className="block bg-yellow-500 text-white px-2.5 rounded-xl text-sm">
                {formattedPrice(discount)}٪
              </span>
            </>
          )}
        </div>

        <button className="bg-yellow-500 text-white rounded-lg px-3 py-3">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default SellerBox;
