import ConfirmModal from "@/components/modules/main/ConfirmModal";
import DeleteModal from "@/components/modules/main/DeleteModal";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import Link from "next/link";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function TicketRow() {
  return (
    <Table.Row>
      <td>1</td>
      <td>تیکت تست</td>
      <td>بررسی باگ</td>
      <td>متوسط</td>

      <td>پشتیبانی</td>
      <td>مدیریت</td>
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
              <ConfirmModal status="بستن" />
            </Modal.Page>

            <Modal.Open name="deleteComment">
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="deleteComment">
              <DeleteModal isQuestion />
            </Modal.Page>

            <Link href="/p-admin/tickets/1">
              <FaEye className="text-sky-500 text-base md:text-xl" />
            </Link>
          </div>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default TicketRow;
