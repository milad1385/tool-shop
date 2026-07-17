import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import Image from "next/image";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import ProductItemRow from "./ProductItemRow";

function ProductList() {
  return (
    <div className="section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>عکس</th>
            <th>عنوان</th>
            <th>لینک</th>
            <th>دسته بندی</th>
            <th>تگ ها</th>
            <th>تاریخ</th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            <ProductItemRow />
            <ProductItemRow />
            <ProductItemRow />
            <ProductItemRow />
            <ProductItemRow />
          </Table.Body>
        </Table>
        <Pagination count={10} />
      </div>
    </div>
  );
}

export default ProductList;
