import Image from "next/image";
import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";

function ProductRow() {
  return (
    <tr>
      <td>1</td>
      <td>
        <Image
          src="/images/product-1.jpg"
          alt="user.jpg"
          width={1920}
          height={1080}
          className="w-8 md:w-16 h-8 md:h-16 rounded-full mx-auto"
        />
      </td>
      <td>دریل شارژی</td>
      <td>1404/04/01</td>
      <td>25,000</td>
      <td>
        <div className="flex items-center gap-x-3 justify-center">
          <FaTrash className="-mt-1 text-red-700" />
          <FaEye className="-mt-1 text-yellow-500 md:cursor-pointer" />
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;
