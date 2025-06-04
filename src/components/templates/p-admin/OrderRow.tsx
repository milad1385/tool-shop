import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";

function OrderRow() {
  return (
    <tr>
      <td>1</td>

      <td>میلاد سلامیان</td>
      <td>1404/03/18</td>
      <td>25,000</td>
      <td>
        <div className="bg-green-600 text-white rounded-md text-xs py-2 w-[40px] mx-auto">
            تحویل
        </div>
      </td>
      <td>
        <div className="flex items-center gap-x-3 justify-center">
          <FaTrash className="-mt-1 text-red-700" />
          <FaEye className="-mt-1 text-yellow-500 md:cursor-pointer" />
        </div>
      </td>
    </tr>
  );
}

export default OrderRow;
