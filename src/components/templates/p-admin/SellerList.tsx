import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { FaCheck, FaTrash, FaEye } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function SellerList() {
  return (
    <div className="section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>نام</th>

            <th>فروشگاه</th>
            <th>تلفن</th>
            <th>ایمیل</th>
            <th>شهر</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td>میلاد سلامیان</td>
              <td>ابزار میلاد</td>
              <td>09336085012</td>
              <td>Milad@gmail.com</td>

              <td>ایتالیا</td>
              <td>1404/06/15</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تایید شده
                </div>
              </td>

              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaXmark className="text-red-500 text-base md:text-2xl" />

                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td>میلاد سلامیان</td>
              <td>ابزار میلاد</td>
              <td>09336085012</td>
              <td>Milad@gmail.com</td>

              <td>ایتالیا</td>
              <td>1404/06/15</td>

              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  بررسی کنید
                </div>
              </td>

              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />

                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
              <td>میلاد سلامیان</td>
              <td>ابزار میلاد</td>
              <td>09336085012</td>
              <td>Milad@gmail.com</td>

              <td>ایتالیا</td>
              <td>1404/06/15</td>

              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  رد شده
                </div>
              </td>

              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />

                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>4</td>
              <td>میلاد سلامیان</td>
              <td>ابزار میلاد</td>
              <td>09336085012</td>
              <td>Milad@gmail.com</td>

              <td>ایتالیا</td>
              <td>1404/06/15</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تایید شده
                </div>
              </td>

              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaXmark className="text-red-500 text-base md:text-2xl" />

                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>5</td>
              <td>میلاد سلامیان</td>
              <td>ابزار میلاد</td>
              <td>09336085012</td>
              <td>Milad@gmail.com</td>

              <td>ایتالیا</td>
              <td>1404/06/15</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تایید شده
                </div>
              </td>

              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaXmark className="text-red-500 text-base md:text-2xl" />

                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>6</td>
              <td>میلاد سلامیان</td>
              <td>ابزار میلاد</td>
              <td>09336085012</td>
              <td>Milad@gmail.com</td>

              <td>ایتالیا</td>
              <td>1404/06/15</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تایید شده
                </div>
              </td>

              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaXmark className="text-red-500 text-base md:text-2xl" />

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

export default SellerList;
