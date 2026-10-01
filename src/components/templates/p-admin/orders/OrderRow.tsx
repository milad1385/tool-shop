"use client";
import SelectBox from "@/components/ui/SelectBox";
import { getOrderStatus, orderStatusItems } from "@/constants/data";
import { changeOrderStatus } from "@/libs/actions/order.action";
import { IUserOrders, UserRoleEnums } from "@/libs/types";
import { formatDate, formattedPrice, getOrderInfo } from "@/utils/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";

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
  roles,
}: IUserOrders) {
  const [orderStatus, setOrderStatus] = useState(
    orderStatusItems.find((item) => item.value === status),
  );
  const pathname = usePathname();
  const { title, backgroundColor } = getOrderInfo(status);
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = async (selected: any) => {
    setOrderStatus(selected);

    startTransition(async () => {
      const result = await changeOrderStatus(selected.value, _id);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

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
        <div
          className={`${backgroundColor} text-white rounded-3xl py-2 px-4 w-[150px]`}
        >
          {title}
        </div>
      </td>
      {roles.includes(UserRoleEnums.SUPER_ADMIN) && (
        <td>
          <div className="w-[200px]">
            <SelectBox
              placeholder="وضعیت انتخاب کنید"
              name="province"
              options={getOrderStatus()}
              title=""
              searchable
              selected={orderStatus}
              onSelected={handleStatusChange}
              disable={isPending}
            />
          </div>
        </td>
      )}
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

export default OrderRow;
