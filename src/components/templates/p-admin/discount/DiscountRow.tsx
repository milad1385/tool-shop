import Table from "@/components/modules/p-admin/Table";
import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function DiscountRow() {
  return (
    <Table.Row>
      <td>1</td>
      <td>Ronix-25</td>
      <td>25%</td>
      <td>5</td>
      <td>3</td>

      <td>دریل</td>
      <td>1404/04/25</td>
      <td>
        <div className="bg-green-500 text-white rounded-3xl py-2 px-2.5">
          فعال
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <FaPencil className="text-yellow-500 text-base md:text-xl" />
          <FaTrash className="text-red-600 text-base md:text-xl" />
          <FaEye className="text-sky-500 text-base md:text-xl" />
        </div>
      </td>
    </Table.Row>
  );
}

export default DiscountRow;
