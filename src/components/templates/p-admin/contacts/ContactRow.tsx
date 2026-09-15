import Table from "@/components/modules/p-admin/Table";
import { IContactUs } from "@/libs/types";
import { formatDate } from "@/utils/helper";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function ContactRow({ index, fullname, createdAt, status, email }: IContactUs) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td className="py-6">{fullname}</td>
      <td>{email}</td>
      <td>
        {status === "ANSWERED" ? (
          <div className="bg-green-500 text-white rounded-3xl  py-2">
            پاسخ داده شده
          </div>
        ) : (
          <div className="bg-yellow-500 text-white rounded-3xl  py-2">
            در انتظار پاسخ
          </div>
        )}
      </td>
      <td>{formatDate(createdAt)}</td>
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

export default ContactRow;
