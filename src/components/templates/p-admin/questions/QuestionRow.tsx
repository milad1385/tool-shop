import ConfirmModal from "@/components/modules/main/ConfirmModal";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import {
  changeQuestionStatus,
  deleteQuestion,
} from "@/libs/actions/question.action";
import { IQuestion } from "@/libs/types";
import { formatDate, getQuestionStatus } from "@/utils/helper";
import Link from "next/link";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaCheck } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function QuestionRow({
  index,
  question,
  order,
  createdAt,
  status,
  _id,
  onDelete,
}: IQuestion) {
  const [isDeleting, startDeleting] = useTransition();
  const [isChangingStatus, startChangingStatus] = useTransition();
  const { name, className } = getQuestionStatus(status);

  const deleteCategoryHandler = () => {
    startDeleting(async () => {
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

  const changeQuestionStatusHandler = (newStatus: "accept" | "reject") => {
    startChangingStatus(async () => {
      if (!_id) return;
      try {
        const result = await changeQuestionStatus(_id, newStatus);
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
            <Link href={`/p-admin/questions/${_id}`}>
              <FaPencil className="text-sky-500 text-base md:text-xl" />
            </Link>

            {(status === "pending" || status === "reject") && (
              <>
                <Modal.Open name="acceptModal">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                </Modal.Open>
                <Modal.Page name="acceptModal">
                  <ConfirmModal
                    status="تایید"
                    isLoading={isChangingStatus}
                    onSubmit={() => changeQuestionStatusHandler("accept")}
                  />
                </Modal.Page>
              </>
            )}

            {status === "accept" && (
              <>
                <Modal.Open name="declineModal">
                  <FaXmark className="text-yellow-500 text-base md:text-2xl" />
                </Modal.Open>
                <Modal.Page name="declineModal">
                  <ConfirmModal
                    status="رد"
                    isLoading={isChangingStatus}
                    onSubmit={() => changeQuestionStatusHandler("reject")}
                  />
                </Modal.Page>
              </>
            )}

            <Modal.Open name="delete">
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="delete">
              <ConfirmModal
                status="حذف کردن"
                onSubmit={deleteCategoryHandler}
                isLoading={isDeleting}
              />
            </Modal.Page>
          </div>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default QuestionRow;
