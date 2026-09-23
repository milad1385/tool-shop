import { formattedPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaShop } from "react-icons/fa6";

function OrderBox({
  _id,
  quantity,
  discount,
  product,
  seller,
  price,
  finalPrice,
}: any) {
  return (
    <div className="bg-gray-100 flex-grow overflow-hidden relative rounded-3xl p-4 flex flex-col md:flex-row items-center justify-center mb-4 gap-y-6 gap-x-8">
      <Link href={`/products/${product.slug}`}>
        <Image
          className="w-32 border rounded-2xl"
          src={product.images[0]}
          alt={product.name}
          width={1920}
          height={1080}
        />
      </Link>
      {discount > 0 && (
        <div className="absolute left-0 top-0 bg-yellow-500 w-16 py-2 flex-center text-gray-50 rounded-br-md">
          {discount}%
        </div>
      )}
      <div className="leading-10 flex flex-col md:block gap-y-3 space-y-3">
        <Link
          href={`/products/${product.slug}`}
          className="font-Lalezar text-center md:text-right  text-base md:text-xl"
        >
          {product.name.slice(0, 20)}
        </Link>
        <Link
          href={`/category/${product.category.href}`}
          className="block text-center md:text-right text-zinc-700 text-sm md:text-base"
        >
          دسته بندی: {product.category.name}
        </Link>
        <div className="text-sm text-zinc-700 flex-center md:justify-start">
          <span>تعداد : </span>
          <span>{quantity} عدد</span>
        </div>
        <Link
          href="/seller/1"
          className="flex items-center justify-center md:justify-start gap-x-2 text-center md:text-right text-zinc-700 text-xs md:text-sm"
        >
          <FaShop className="text-base md:text-lg text-yellow-500" />
          {seller?.name}
        </Link>

        <div className="flex gap-4 text-base mt-4 pb-2 min-w-[193px] flex-center md:justify-start">
          {discount > 0 && (
            <span className="line-through text-zinc-700">
              {formattedPrice(price)}
            </span>
          )}
          <span className={discount > 0 ? "text-yellow-500" : "text-zinc-900"}>
            {formattedPrice(finalPrice)} تومان
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderBox;
