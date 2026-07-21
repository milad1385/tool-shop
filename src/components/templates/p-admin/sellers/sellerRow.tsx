import Table from "@/components/modules/p-admin/Table";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function sellerRow() {
  return (
    <Table.Row>
      <td>1</td>
      <td>میلاد سلامیان</td>
      <td>ابزار میلاد</td>
      <td>09336085012</td>
      <td>Milad@gmail.com</td>

      <td>ایتالیا</td>
      <td>1404/06/15</td>

      <td>
        <div className="bg-green-500 text-white rounded-3xl py-2 px-2.5">
          تایید شده
        </div>
      </td>

      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <FaXmark className="text-red-500 text-base md:text-2xl" />

          <FaTrash className="text-red-600 text-base md:text-xl" />
        </div>
      </td>
    </Table.Row>
  );
}

export default sellerRow;
