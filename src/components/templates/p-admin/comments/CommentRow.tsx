import ConfirmModal from "@/components/modules/main/ConfirmModal";
import DeleteModal from "@/components/modules/main/DeleteModal";
import EditCommentModal from "@/components/modules/main/EditCommentModal";
import Modal from "@/components/modules/main/Modal";
import ShowCommentModal from "@/components/modules/main/ShowCommentModal";
import Table from "@/components/modules/p-admin/Table";
import { FaEye, FaStar, FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function CommentRow() {
  return (
    <Table.Row>
      <td>1</td>
      <td>میلاد سلامیان</td>
      <td>Milad1385</td>
      <td>دریل رونیکس</td>
      <td>
        <div className="flex items-center gap-x-2.5">
          <FaStar className="text-gray-400 text-base md:text-xl" />
          <FaStar className="text-yellow-500 text-base md:text-xl" />
          <FaStar className="text-yellow-500 text-base md:text-xl" />
          <FaStar className="text-yellow-500 text-base md:text-xl" />
          <FaStar className="text-yellow-500 text-base md:text-xl" />
        </div>
      </td>

      <td>اصلی</td>
      <td>1404/04/12</td>

      <td>
        <div className="bg-green-500 text-white rounded-3xl px-4 py-2">
          تایید شده
        </div>
      </td>
      <td>
        <Modal>
          <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
            <Modal.Open name="declineModal">
              <FaXmark className="text-red-500 text-base md:text-2xl" />
            </Modal.Open>
            <Modal.Page name="declineModal">
              <ConfirmModal status="رد" />
            </Modal.Page>
            <Modal.Open name="editModalComment">
              <FaPencil className="text-yellow-500 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="editModalComment">
              <EditCommentModal />
            </Modal.Page>
            <Modal.Open name="showComment">
              <FaEye className="text-sky-500 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="showComment">
              <ShowCommentModal />
            </Modal.Page>
            <Modal.Open name="deleteComment">
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="deleteComment">
              <DeleteModal isQuestion />
            </Modal.Page>
          </div>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default CommentRow;
