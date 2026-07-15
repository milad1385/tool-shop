import Image from "next/image";
import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";

function ProductRow() {
  return (
    <tr className="border-b border-gray-100">
      <td className="px-2 py-2 text-center">1</td>
      <td className="px-2 py-2 text-center">
        <Image
          src="/images/product-1.jpg"
          alt="product.jpg"
          width={1920}
          height={1080}
          className="w-12 md:w-12 h-12 md:h-12 rounded-full mx-auto object-cover"
        />
      </td>
      <td className="px-2 py-2 text-center">دریل شارژی</td>
      <td className="px-2 py-2 text-center">1404/04/01</td>
      <td className="px-2 py-2 text-center">25,000</td>
      <td className="px-2 py-2 text-center">
        <div className="flex items-center gap-x-3 justify-center">
          <FaTrash className="text-red-700 text-base  cursor-pointer hover:text-red-900 transition-colors" />
          <FaEye className="text-yellow-500 text-base  cursor-pointer hover:text-yellow-700 transition-colors" />
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;
