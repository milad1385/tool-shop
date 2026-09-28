"use client";
import { IUserOrders } from "@/libs/types";
import { formatDate, formattedPrice, getOrderInfo } from "@/utils/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEye } from "react-icons/fa";

function LatestOrderItem({
  index,
  user,
  address,
  finalPrice,
  createdAt,
  status,
  _id,
}: IUserOrders) {

  const pathname = usePathname();
  const { title, backgroundColor } = getOrderInfo(status);
  return (
    <tr className="border-b border-gray-100 text-sm">
      <td>{index}</td>
      <td><Link href={`/p-admin/orders/${_id}`}>{user.fullname}</Link></td>
      <td>{address.city}</td>
      <td>{formattedPrice(finalPrice)} تومان</td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <div className={`${backgroundColor} text-white rounded-3xl py-2 px-4`}>
          {title}
        </div>
      </td>

      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <Link
            href={
              pathname.includes("/p-seller")
                ? `/p-seller/orders/${_id}`
                : `/p-admin/orders/${_id}`
            }
          >
            <FaEye className="text-sky-500 text-base md:text-xl" />
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default LatestOrderItem;
