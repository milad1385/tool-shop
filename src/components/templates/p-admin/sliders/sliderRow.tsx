import Table from "@/components/modules/p-admin/Table";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function sliderRow() {
  return (
    <Table.Row>
      <td>1</td>
      <td className="!p-0 md:!p-5">
        <Image
          src="/images/slider-2.jpg"
          className="w-[100px] h-[50px] md:w-[200px] md:h-[90px] my-2 md:my-0 object-cover rounded-md mx-auto"
          alt="slider-2.jpg"
          width={1920}
          height={1080}
        />
      </td>
      <td>
        <Link href="/products">اسلایدر اول</Link>
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

export default sliderRow;
