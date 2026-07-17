import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import React from "react";
import { FaTrash } from "react-icons/fa6";

function ProductFeatureList() {
  return (
    <div className="section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>نام محصول</th>
            <th>عنوان</th>
            <th> مقدار</th>
            <th>اسلاگ</th>
            <th>تاریخ</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>مقدار باتری</td>
              <td>35 ولت</td>

              <td>ButteryVoltage</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>مقدار باتری</td>
              <td>35 ولت</td>

              <td>ButteryVoltage</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>مقدار باتری</td>
              <td>35 ولت</td>

              <td>ButteryVoltage</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>مقدار باتری</td>
              <td>35 ولت</td>

              <td>ButteryVoltage</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>مقدار باتری</td>
              <td>35 ولت</td>

              <td>ButteryVoltage</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>مقدار باتری</td>
              <td>35 ولت</td>

              <td>ButteryVoltage</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>مقدار باتری</td>
              <td>35 ولت</td>

              <td>ButteryVoltage</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>مقدار باتری</td>
              <td>35 ولت</td>

              <td>ButteryVoltage</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
          </Table.Body>
        </Table>
        <Pagination count={35} />
      </div>
    </div>
  );
}

export default ProductFeatureList;
