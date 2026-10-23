import Table from "@/components/modules/p-admin/Table";
import { formatDate, getQuestionStatus } from "@/utils/helper";
import { FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function QuestionRow({ index, question, order, createdAt, status }) {
  const { name, className } = getQuestionStatus(status);
  return (
    <Table.Row>
      <td>{index}</td>

      <td>
        <p className="line-clamp-1">{question}</p>
      </td>

      <td>{formatDate(createdAt)}</td>
      <td>{order}</td>
      <td>
        <div className={`${className} text-white rounded-3xl py-2`}>{name}</div>
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
