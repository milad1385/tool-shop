import { ISellerBox } from "@/libs/types";
import MobileSellerBox from "./MobileSellerBox";
import { formattedPrice } from "@/utils/helper";

function OtherSellerBox({ isMain, seller, discount, price }: ISellerBox) {
  const finalPrice = price - (price * discount) / 100;
  return (
    <div className="border border-gray-300 rounded-xl">
      <div className="px-5 py-4 space-y-2">
        <h3 className="font-bold text-zinc-700">فروشنده</h3>
        {isMain && (
          <h4 className="text-xs text-gray-500">
            شما در حال خرید از این فروشنده هستید
          </h4>
        )}
        <MobileSellerBox sellerName={seller.name} />
      </div>
      <div className="border-t-[1.5px] border-t-gray-300 px-5 py-6 flex items-center justify-between">
        <button className="bg-yellow-500 py-3 px-4 text-sm rounded-md text-white font-bold">
          افزودن به سبد خرید
        </button>
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex items-center gap-x-2">
            <span className="font-bold text-base md:text-lg">
              {formattedPrice(finalPrice)}
              <span className="text-xs tracking-tighter mr-1">تومان</span>
            </span>
            {discount > 0 && (
              <div className="bg-yellow-500 text-white rounded-xl px-2 py-0.5 flex-center text-xs">
                {formattedPrice(discount)}٪
              </div>
            )}
          </div>
          {discount > 0 && (
            <span className="line-through text-zinc-400 text-xs">
              {formattedPrice(price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtherSellerBox;
