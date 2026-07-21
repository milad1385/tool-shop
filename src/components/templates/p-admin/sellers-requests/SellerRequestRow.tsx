import Table from "@/components/modules/p-admin/Table";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function SellerRequestRow() {
  return (
    <Table.Row>
      <td>1</td>
      <td>میلاد سلامیان</td>
      <td>ابزار میلاد</td>
      <td>دریل رونیکس</td>
      <td>25</td>

      <td>25,000</td>
      <td>1404/04/12</td>

      <td>
        <div className="bg-green-500 text-white rounded-3xl py-2 px-2.5">
          تایید شده
        </div>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <FaEye className="text-blue-800 text-base md:text-2xl" />
          <FaEye className="text-green-600 text-base md:text-2xl" />
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <FaXmark className="text-red-500 text-base md:text-2xl" />
          <FaPencil className="text-yellow-500 text-base md:text-xl" />
          <FaTrash className="text-red-600 text-base md:text-xl" />
        </div>
      </td>
    </Table.Row>
  );
}

export default SellerRequestRow;
