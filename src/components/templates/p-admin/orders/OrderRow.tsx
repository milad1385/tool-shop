"use client";
import { IUserOrders } from "@/libs/types";
import { formatDate, formattedPrice, getOrderInfo } from "@/utils/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBan, FaEye, FaTrash } from "react-icons/fa";

function OrderRow({
  index,
  user,
  address,
  totalPrice,
  totalDiscount,
  finalPrice,
  createdAt,
  status,
  _id,
}: IUserOrders) {
  const pathname = usePathname();
  const { title, backgroundColor } = getOrderInfo(status);
  return (
    <tr className="border-b border-gray-100">
      <td>{index}</td>
      <td>{user.fullname}</td>
      <td>{address.city}</td>
      <td>{formattedPrice(totalPrice)} تومان</td>

      <td>{formattedPrice(totalDiscount)} تومان</td>
      <td>{formattedPrice(finalPrice)} تومان</td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <div className={`${backgroundColor} text-white rounded-3xl py-2 px-4`}>
          {title}
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <FaTrash className="text-red-600 text-base md:text-xl" />
          <Link
            href={
              pathname.includes("/p-seller")
                ? `/p-seller/orders/${_id}`
                : `/p-admin/orders/${_id}`
            }
          >
            <FaEye className="text-sky-500 text-base md:text-xl" />
          </Link>
          <FaBan className="text-gray-500 text-base md:text-xl" />
        </div>
      </td>
    </tr>
  );
}

export default OrderRow;
