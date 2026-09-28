import { IUserOrders } from "@/libs/types";
import { formatDate, formattedPrice, getOrderInfo } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import OrderItem from "./OrderItem";

function OrderBox({ order }: { order: IUserOrders }) {
  const { title, backgroundColor } = getOrderInfo(order.status);
  return (
    <div className="p-4 sm:p-6 border rounded-2xl bg-white relative">
      <div className={`${backgroundColor} rounded-tl-2xl font-Lalezar text-xs sm:text-sm text-white py-2 sm:py-3 px-4 sm:px-6 rounded-br-2xl absolute top-0 left-0`}>
        {title}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-x-3 font-bold mt-6 sm:mt-0">
        <h3 className="text-sm sm:text-base">
          نام و نام خانوادگی : {order.address.name}
        </h3>
        <h3 className="text-sm sm:text-base">
          استان : {order.address.province}
        </h3>
        <h3 className="text-sm sm:text-base">شهر : {order.address.city}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 my-6 sm:my-10 text-xs sm:text-sm">
        <div>
          <span>تاریخ:</span>
          <span className="mr-1 text-stone-500">
            {formatDate(order.createdAt)}
          </span>
        </div>
        <div>
          <span>کد سفارش:</span>
          <span className="mr-1 text-stone-500">{order.trackingCode}#</span>
        </div>
        <div>
          <span>تخفیف:</span>
          <span className="mr-1 text-stone-500">
            {formattedPrice(order.totalDiscount)}{" "}
            <span className="hidden sm:inline-block">تومان</span>
          </span>
        </div>
        <div>
          <span>جمع سبد خرید:</span>
          <span className="mr-1 text-stone-500">
            {formattedPrice(order.totalPrice)}{" "}
            <span className="hidden sm:inline-block">تومان</span>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-0 sm:flex-nowrap justify-center sm:justify-start mb-4 sm:mb-6">
        {order.items.map((item) => (
          <Link
            key={item._id}
            href={`/products/${item.product.slug}`}
            className="flex-shrink-0"
          >
            <Image
              src={item.product.images[0]}
              alt={item.product.name}
              width={1920}
              height={1080}
              className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>

      <div className="divide-y-2 divide-gray-300">
        {order.items.map((item) => (
          <OrderItem item={item} key={item._id} />
        ))}
      </div>

      <div className="flex items-center justify-end mt-4">
        <Link
          href={`/factor/${order._id}`}
          className="px-6 sm:px-8 py-2.5 bg-stone-800 rounded-xl text-white text-sm sm:text-base hover:bg-stone-700 transition-colors"
        >
          مشاهده فاکتور
        </Link>
      </div>
    </div>
  );
}

export default OrderBox;
