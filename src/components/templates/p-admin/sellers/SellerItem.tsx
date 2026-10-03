import Table from "@/components/modules/p-admin/Table";
import { UserRoleEnums } from "@/libs/types";
import { formatDate, getStatusConfig } from "@/utils/helper";
import Link from "next/link";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function SellerItem({
  index,
  user,
  name,
  contactDetails,
  city,
  createdAt,
  status,
  hasPermission,
  _id,
}) {
  const { label, className } = getStatusConfig(status);
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{user.fullname}</td>
      <td>
        <Link href={`/sellers/${_id}`}>{name}</Link>
      </td>
      <td>{contactDetails.phone}</td>
      <td>{contactDetails.email}</td>

      <td>{city}</td>
      <td>{formatDate(createdAt)}</td>

      <td>
        <div className={`${className} rounded-3xl py-2 px-2.5`}>{label}</div>
      </td>

      {hasPermission && (
        <td>
          <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
            {status === "accept" ? (
              <FaXmark className="text-red-500 text-base md:text-2xl" />
            ) : (
              <FaCheck className="text-green-500 text-base md:text-2xl" />
            )}

            <FaTrash className="text-red-600 text-base md:text-xl" />
          </div>
        </td>
      )}
    </Table.Row>
  );
}

export default SellerItem;
