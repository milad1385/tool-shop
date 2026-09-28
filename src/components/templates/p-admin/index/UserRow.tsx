import { formatDate } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";

function UserRow({ index, image, fullname, createdAt, phone }) {
  return (
    <tr className="border-b border-gray-100 last:!border-none">
      <td>{index}</td>
      <td>
        <Image
          src={image ? image : "/images/user.jpg"}
          alt="user.jpg"
          width={1920}
          height={1080}
          className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
        />
      </td>
      <td>{fullname}</td>
      <td>{formatDate(createdAt)}</td>
      <td>{phone}</td>
      <td>
        <div className="flex items-center gap-x-3 justify-center">
          <FaTrash className="-mt-1 text-base text-red-700" />
        </div>
      </td>
    </tr>
  );
}

export default UserRow;
