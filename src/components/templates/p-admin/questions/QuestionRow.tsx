import Table from "@/components/modules/p-admin/Table";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function QuestionRow() {
  return (
    <Table.Row>
      <td>1</td>

      <td>
        <p className="line-clamp-1"> سوال اول برای تست</p>
      </td>
      <td>
        <p className="line-clamp-1"> جواب اول برای تست</p>
      </td>

      <td>1404/04/25</td>
      <td>1</td>
      <td>
        <div className="bg-green-500 text-white rounded-3xl py-2">
          منتشر شده
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <FaPencil className="text-sky-500 text-base md:text-xl" />
          <FaTrash className="text-red-600 text-base md:text-xl" />

          <FaXmark className="text-yellow-500 text-base md:text-2xl" />
        </div>
      </td>
    </Table.Row>
  );
}

export default QuestionRow;
