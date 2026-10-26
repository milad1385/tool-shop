import ConfirmModal from "@/components/modules/main/ConfirmModal";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import { deleteQuestion } from "@/libs/actions/question.action";
import { formatDate, getQuestionStatus } from "@/utils/helper";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function QuestionRow({
  index,
  question,
  order,
  createdAt,
  status,
  _id,
  onDelete,
}) {
  const [isPending, startTransition] = useTransition();
  const { name, className } = getQuestionStatus(status);

  const deleteCategoryHandler = () => {
    startTransition(async () => {
      if (!_id) return;
      try {
        onDelete(_id);
        const result = await deleteQuestion(_id);
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };
  return (
    <Table.Row>
      <td>{index}</td>

      <td>
        <p className="line-clamp-1">{question}</p>
      </td>

      <td>{formatDate(createdAt)}</td>
      <td>{order}</td>
      <td>
        <div className={`${className} rounded-3xl py-2`}>{name}</div>
      </td>
      <td>
        <Modal>
          <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
            <FaPencil className="text-sky-500 text-base md:text-xl" />
            <Modal.Open name="delete">
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="delete">
              <ConfirmModal
                status="حذف کردن"
                onSubmit={deleteCategoryHandler}
                isLoading={isPending}
              />
            </Modal.Page>

            <FaXmark className="text-yellow-500 text-base md:text-2xl" />
          </div>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default QuestionRow;
