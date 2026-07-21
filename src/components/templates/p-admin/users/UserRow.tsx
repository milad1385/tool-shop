import Table from "@/components/modules/p-admin/Table";
import { FaCheck, FaTrash } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

function UserRow() {
  return (
    <Table.Row>
      <td>1</td>
      <td>میلاد سلامیان</td>
      <td>Milad1385</td>
      <td>Milad@gmail.com</td>
      <td>09336085012</td>
      <td>ادمین</td>
      <td>1404/04/12</td>

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
