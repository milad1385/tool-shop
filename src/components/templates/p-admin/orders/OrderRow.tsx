import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";

function OrderRow() {
  return (
    <tr className="border-b border-gray-100">
      <td className="px-2 py-2 text-center">1</td>
      <td className="px-2 py-2 text-center">میلاد سلامیان</td>
      <td className="px-2 py-2 text-center">1404/03/18</td>
      <td className="px-2 py-2 text-center">25,000</td>
      <td className="px-2 py-2 text-center">کرج</td>
      <td className="px-2 py-2 text-center">
        <div className="bg-green-600 text-white rounded-md text-sm py-2 px-2 w-[50px] mx-auto">
          تحویل
        </div>
      </td>
      <td className="px-2 py-2 text-center">
        <div className="flex items-center gap-x-3 justify-center">
          <FaTrash className="text-red-700 text-base cursor-pointer" />
          <FaEye className="text-yellow-500 text-base cursor-pointer" />
        </div>
      </td>
    </tr>
  );
}

export default OrderRow;
