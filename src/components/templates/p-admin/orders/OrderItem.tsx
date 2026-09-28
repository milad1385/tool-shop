import { formattedPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

function OrderItem({ item }) {
  return (
    <div className="flex gap-x-8 items-center  py-3 text-sm md:text-base">
      <Link href={`/products/${item.product.slug}`}>
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          width={1920}
          height={1080}
          className="w-24"
        />
      </Link>
      <div className="block  md:hidden space-y-3 text-zinc-700">
        <Link
          href={`/products/${item.product.slug}`}
          className="text-black font-bold"
        >
          نام : {item.product.name.slice(0, 20)}
        </Link>
        <p>نام فروشنده : {item.seller.name}</p>
        <p>تعداد : {item.quantity}</p>
        <p>قیمت : {formattedPrice(item.finalPrice)} تومان</p>
        <p>
          قیمت کل : {formattedPrice(item.finalPrice * item.discount)} تومان
        </p>
      </div>
      <Link href={`/products/${item.product.slug}`} className="hidden text-sm md:block">
        {item.product.name.slice(0, 40)}
      </Link>
      <Link href={`/sellers/${item.seller._id}`} className="hidden text-sm md:block">
        نام فروشنده : {item.seller.name}
      </Link>
      <p className="hidden md:block text-sm">تعداد : {item.quantity}</p>
      <p className="hidden md:block text-sm">
        قیمت : {formattedPrice(item.finalPrice)} تومان
      </p>
      <p className="hidden md:block text-sm">
        قیمت کل : {formattedPrice(item.finalPrice * item.discount)} تومان
      </p>
    </div>
  );
}

export default OrderItem;
