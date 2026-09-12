import { IProduct } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuArrowDownUp } from "react-icons/lu";

function ProductBox({ name, slug, images, sellers }: IProduct) {
  const lowestPrice = Math.min(...sellers.map((s) => s.price));
  const maxDiscount = Math.max(...sellers.map((s) => s.discount || 0));
  const finalPrice = lowestPrice - (lowestPrice * maxDiscount) / 100;
  return (
    <div className="bg-white space-y-3 rounded-3xl overflow-hidden p-4">
      <Link href={`/products/${slug}`} className="relative">
        <Image
          src={`${images[0]}`}
          alt={name}
          width={1920}
          height={1080}
          className="mx-auto w-[200px] md:w-[260px]"
        />
        {maxDiscount > 0 && (
          <span className="bg-[#eab308] w-[40px]  h-[40px] flex-center text-sm rounded-full absolute top-1 right-1">
            {maxDiscount}%
          </span>
        )}
      </Link>
      <div>
        <Link
          href={slug}
          className="flex-center font-Lalezar text-base md:text-lg"
        >
          {name}
        </Link>
        <div className="flex items-center justify-center gap-x-3 mt-4">
          <span
            className={`text-zinc-500 flex items-center gap-x-1 ${maxDiscount ? "line-through" : ""}`}
          >
            {formattedPrice(lowestPrice)}
            {/*  <span className="sm:hidden lg:block"></span> */}
          </span>
          {maxDiscount && (
            <span className="text-yellow-500 flex items-center gap-x-1">
              {formattedPrice(finalPrice)}{" "}
              <span className="sm:hidden lg:block">تومان</span>
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-3 mt-4">
        <div className="bg-yellow-500 p-2 text-white rounded-lg md:cursor-pointer">
          <HiOutlineShoppingBag className="text-2xl" />
        </div>
        <div className="bg-yellow-500 p-2 text-white rounded-lg md:cursor-pointer">
          <LuArrowDownUp className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
