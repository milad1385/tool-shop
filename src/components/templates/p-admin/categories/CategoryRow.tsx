import Table from "@/components/modules/p-admin/Table";
import Image from "next/image";
import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function CategoryRow() {
  return (
    <Table.Row>
      <td>2</td>
      <td className="!p-0 md:!p-5">
        <Image
          src="/images/ca-1.png"
          className="w-12 md:w-16 rounded-md mx-auto my-2 md:my-0"
          alt=""
          width={1920}
          height={1080}
        />
      </td>
      <td>دریل رونیکس</td>
      <td>Ronix</td>
      <td>دریل</td>
      <td>رونیکس ، ابزار</td>
      <td>1404/04/25</td>
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

export default CategoryRow;
