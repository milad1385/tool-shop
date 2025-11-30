import Image from "next/image";
import { FaShop } from "react-icons/fa6";
import { HiMinus, HiPlus } from "react-icons/hi2";

function CartItem() {
  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col md:flex-row items-center justify-center mb-4 gap-y-6 gap-x-14">
      <div>
        <Image
          className="w-32 border rounded-2xl"
          src="/images/product-1.jpg"
          alt="product-1.jpg"
          width={1920}
          height={1080}
        />
      </div>
      <div className="leading-10 space-y-3">
        <h1 className="font-Lalezar  text-lg md:text-xl">
          دریل شارژِ مدل رونیکس
        </h1>
        <p className="text-center md:text-right text-zinc-700 text-sm md:text-base">
          دسته بندی: دریل ها
        </p>
        <p className="text-center md:text-right text-zinc-700 text-xs md:text-sm flex items-center gap-x-2">
          <FaShop className="text-base md:text-lg text-yellow-500" />
          فروشگاه ابزارینو
        </p>
      </div>
      <div className="flex gap-4 text-base mt-4">
        <span className="line-through">360.000 تومان</span>
        <span className="text-yellow-500">280.000 تومان</span>
      </div>
      <div>
        <div className="number flex">
          <button className="bg-yellow-500 text-white size-12 rounded-full flex-center">
            <HiPlus className="text-white text-lg" />
          </button>
          <span className="minus p-4">تعداد : 20</span>
          <button className="bg-black text-white size-12 rounded-full flex-center">
            <HiMinus className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
