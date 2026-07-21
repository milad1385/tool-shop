"use client";
import ConfirmModal from "@/components/modules/main/ConfirmModal";
import DeleteModal from "@/components/modules/main/DeleteModal";
import EditCommentModal from "@/components/modules/main/EditCommentModal";
import Modal from "@/components/modules/main/Modal";
import ShowCommentModal from "@/components/modules/main/ShowCommentModal";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { FaCheck, FaEye, FaStar, FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";
import TicketRow from "./TicketRow";

function TicketList() {
  return (
    <div className="md:section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>عنوان</th>
            <th>موضوع</th>
            <th>اولویت</th>
            <th>دپارتمان</th>
            <th>زیر دپارتمان</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            <TicketRow/>
            <TicketRow/>
            <TicketRow/>
            <TicketRow/>
            <TicketRow/>
            <TicketRow/>
          </Table.Body>
        </Table>
        <Pagination count={35} />
      </div>
    </div>
  );
}

export default TicketList;
