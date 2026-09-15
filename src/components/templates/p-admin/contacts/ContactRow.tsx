"use client";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import { IContactUs } from "@/libs/types";
import { formatDate } from "@/utils/helper";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import CommentModal from "../../p-user/comments/CommentModal";
import ConfirmModal from "@/components/modules/main/ConfirmModal";
import { useTransition } from "react";
import { deleteContact } from "@/libs/actions/contact.actions";
import toast from "react-hot-toast";

function ContactRow({
  _id,
  index,
  fullname,
  message,
  createdAt,
  status,
  email,
  onDelete,
}: IContactUs) {
  const [isPending, startTransition] = useTransition();
  const deleteContactHandler = async () => {
    startTransition(async () => {
      if (!_id) return;
      try {
        onDelete(_id);
        const result = await deleteContact(_id);
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
          <Modal>
            <Modal.Open name="message">
              <FaEye className="text-sky-500 text-base md:text-xl" />
            </Modal.Open>

            <Modal.Page name="message">
              <CommentModal message={message} name={fullname} />
            </Modal.Page>

            <Modal.Open name="delete">
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="delete">
              <ConfirmModal
                status="حذف کردن"
                onSubmit={deleteContactHandler}
                isLoading={isPending}
              />
            </Modal.Page>
          </Modal>

          <FaPencil className="text-yellow-500 text-base md:text-xl" />
        </div>
      </td>
    </Table.Row>
  );
}

export default ContactRow;
