import Button from "@/components/ui/Button";
import { IUserOrders } from "@/libs/types";
import { formatDate, formattedPrice, getOrderInfo } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

function OrderBox({
  status,
  createdAt,
  trackingCode,
  totalDiscount,
  finalPrice,
  items,
  _id,
}: IUserOrders) {
  const { title, backgroundColor } = getOrderInfo(status);
  return (
    <div className={`p-6 border rounded-2xl relative`}>
      <div
        className={`${backgroundColor} rounded-tl-2xl font-Lalezar text-sm text-white py-3 px-6 rounded-br-2xl absolute top-0 left-0`}
      >
        {title}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10 text-sm">
        <div>
          <span>تاریخ:</span>
          <span className="mr-1 text-stone-500">{formatDate(createdAt)}</span>
        </div>
        <div>
          <span>کد سفارش:</span>
          <span className="mr-1 text-stone-500">{trackingCode}#</span>
        </div>
        <div>
          <span>تخفیف:</span>
          <span className="mr-1 text-stone-500">
            {formattedPrice(totalDiscount)}{" "}
            <span className="hidden md:inline-block">تومان</span>
          </span>
        </div>
        <div>
          <span>جمع سفارش:</span>
          <span className="mr-1 text-stone-500">
            {formattedPrice(finalPrice)}{" "}
            <span className="hidden md:inline-block">تومان</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex mb-6">
          {items.map((item) => (
            <Link href={`/products/${item.product.slug}`} key={item._id}>
              <Image
                src={item.product.images[0]}
                alt={item.product.name}
                width={1920}
                height={1080}
                className="w-24"
              />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-4">
          <Link href={`/factor/${_id}`}>
            <Button className="!rounded-xl !w-[125px]">مشاهده فاکتور</Button>
          </Link>
          <Link href={`/p-user/orders/${_id}`}>
            <Button className="!bg-red-600 !rounded-xl !w-[125px]">
              جزییات
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderBox;
