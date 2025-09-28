import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { BsFillEyeFill } from "react-icons/bs";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

function SellerRequestList() {
  return (
    <div className="section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>نام</th>
            <th>نام کاربری</th>
            <th>محصول</th>
            <th>تعداد</th>
            <th>قیمت</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>توضیحات</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>دریل رونیکس</td>
              <td>25</td>

              <td>25,000</td>
              <td>1404/04/12</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تایید شده
                </div>
              </td>
              <td>
                <div className="flex items-center gap-x-3">
                  <BsFillEyeFill className="text-blue-800 text-base md:text-2xl" />
                  <BsFillEyeFill className="text-green-600 text-base md:text-2xl" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaXmark className="text-red-500 text-base md:text-2xl" />
                  <MdOutlineEdit className="text-yellow-500 text-base md:text-2xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>موتور رونیکس</td>
              <td>35</td>

              <td>42,000</td>
              <td>1404/05/15</td>

              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  بررسی کنید
                </div>
              </td>
              <td>
                <div className="flex items-center gap-x-3">
                  <BsFillEyeFill className="text-blue-800 text-base md:text-2xl" />
                  <BsFillEyeFill className="text-green-600 text-base md:text-2xl" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <MdOutlineEdit className="text-yellow-500 text-base md:text-2xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>پیچ گوشتی</td>
              <td>85</td>

              <td>38,000</td>
              <td>1404/06/15</td>

              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  رد شده
                </div>
              </td>
              <td>
                <div className="flex items-center gap-x-3">
                  <BsFillEyeFill className="text-blue-800 text-base md:text-2xl" />
                  <BsFillEyeFill className="text-green-600 text-base md:text-2xl" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <MdOutlineEdit className="text-yellow-500 text-base md:text-2xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>4</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>دریل رونیکس</td>
              <td>25</td>

              <td>25,000</td>
              <td>1404/04/12</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تایید شده
                </div>
              </td>
              <td>
                <div className="flex items-center gap-x-3">
                  <BsFillEyeFill className="text-blue-800 text-base md:text-2xl" />
                  <BsFillEyeFill className="text-green-600 text-base md:text-2xl" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaXmark className="text-red-500 text-base md:text-2xl" />
                  <MdOutlineEdit className="text-yellow-500 text-base md:text-2xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>5</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>موتور رونیکس</td>
              <td>35</td>

              <td>42,000</td>
              <td>1404/05/15</td>

              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  بررسی کنید
                </div>
              </td>
              <td>
                <div className="flex items-center gap-x-3">
                  <BsFillEyeFill className="text-blue-800 text-base md:text-2xl" />
                  <BsFillEyeFill className="text-green-600 text-base md:text-2xl" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <MdOutlineEdit className="text-yellow-500 text-base md:text-2xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>6</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>پیچ گوشتی</td>
              <td>85</td>

              <td>38,000</td>
              <td>1404/06/15</td>

              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  رد شده
                </div>
              </td>
              <td>
                <div className="flex items-center gap-x-3">
                  <BsFillEyeFill className="text-blue-800 text-base md:text-2xl" />
                  <BsFillEyeFill className="text-green-600 text-base md:text-2xl" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <MdOutlineEdit className="text-yellow-500 text-base md:text-2xl" />
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

export default SellerRequestList;
