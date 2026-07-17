import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import Image from "next/image";
import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import MenuRow from "./MenuRow";

function MenuList() {
  return (
    <div className="md:section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>نام</th>
            <th>لینک</th>
            <th>پرنت</th>
            <th>آیکون</th>
            <th>تاریخ</th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            <MenuRow />
            <MenuRow />
            <MenuRow />
            <MenuRow />
            <MenuRow />
            <MenuRow />
            <MenuRow />
            <MenuRow />
          </Table.Body>
        </Table>
        <Pagination count={35} />
      </div>
    </div>
  );
}

export default MenuList;
