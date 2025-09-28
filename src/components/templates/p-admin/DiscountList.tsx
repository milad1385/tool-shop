import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function DiscountList() {
  return (
    <div className="section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>کد تخفیف</th>
            <th>درصد</th>
            <th>سقف مصرف</th>
            <th>تعداد استفاده</th>
            <th>محصول</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td>Ronix-25</td>
              <td>25%</td>
              <td>5</td>
              <td>3</td>

              <td>دریل</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  فعال
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <FaEye className="text-sky-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td>Ronix-25</td>
              <td>25%</td>
              <td>5</td>
              <td>3</td>

              <td>دریل</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  غیر فعال
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <FaEye className="text-sky-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
              <td>Ronix-25</td>
              <td>25%</td>
              <td>5</td>
              <td>5</td>

              <td>دریل</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  منقضی شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <FaEye className="text-sky-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>4</td>
              <td>Ronix-25</td>
              <td>25%</td>
              <td>5</td>
              <td>3</td>

              <td>دریل</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  فعال
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <FaEye className="text-sky-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
              <td>Ronix-25</td>
              <td>25%</td>
              <td>5</td>
              <td>5</td>

              <td>دریل</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  منقضی شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <FaEye className="text-sky-500 text-base md:text-xl" />
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

export default DiscountList;
