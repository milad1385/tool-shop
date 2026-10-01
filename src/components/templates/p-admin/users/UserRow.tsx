import Table from "@/components/modules/p-admin/Table";
import { formatDate, getRoleNames } from "@/utils/helper";
import { FaCheck, FaTrash } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

function UserRow({
  index,
  fullname,
  username,
  email,
  phone,
  createdAt,
  roles,
}) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{fullname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{getRoleNames(roles)}</td>
      <td>{formatDate(createdAt)}</td>

      <td>
        <div className="bg-green-500 text-white rounded-3xl py-2 px-4">
          فعال
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <FaCheck className="text-green-500 text-base md:text-xl" />
          <RiAdminFill className="text-blue-800 text-base md:text-2xl" />
          <FaTrash className="text-red-600 text-base md:text-xl" />
        </div>
      </td>
    </Table.Row>
  );
}

export default UserRow;
