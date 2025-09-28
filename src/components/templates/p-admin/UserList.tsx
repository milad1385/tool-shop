import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { FaBan, FaCheck, FaTrash, FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

function UserList() {
  return (
    <div className="section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>نام</th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            <th>شماره همراه</th>
            <th>نقش</th>
            <th>تاریخ عضویت</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>Milad@gmail.com</td>
              <td>09336085012</td>
              <td>ادمین</td>
              <td>1404/04/12</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  فعال
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <RiAdminFill className="text-blue-800 text-base md:text-2xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td>مبینا سلامیان</td>
              <td>Mobina1391</td>
              <td>Mobina@gmail.com</td>
              <td>09125277898</td>
              <td>کاربر</td>
              <td>1404/06/18</td>

              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  بن شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaBan className="text-yellow-500 text-base md:text-xl" />
                  <FaUser className="text-sky-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
              <td>رضا رضایی</td>
              <td>Reza1385</td>
              <td>Reza@gmail.com</td>
              <td>09125233247</td>
              <td>کاربر</td>
              <td>1404/05/03</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  فعال
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <FaUser className="text-sky-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>4</td>
              <td>مبینا سلامیان</td>
              <td>Mobina1391</td>
              <td>Mobina@gmail.com</td>
              <td>09125277898</td>
              <td>کاربر</td>
              <td>1404/06/18</td>

              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  بن شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaBan className="text-yellow-500 text-base md:text-xl" />
                  <FaUser className="text-sky-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>5</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>Milad@gmail.com</td>
              <td>09336085012</td>
              <td>ادمین</td>
              <td>1404/04/12</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  فعال
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <RiAdminFill className="text-blue-800 text-base md:text-2xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>6</td>
              <td>مبینا سلامیان</td>
              <td>Mobina1391</td>
              <td>Mobina@gmail.com</td>
              <td>09125277898</td>
              <td>کاربر</td>
              <td>1404/06/18</td>

              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  بن شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaBan className="text-yellow-500 text-base md:text-xl" />
                  <FaUser className="text-sky-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>7</td>
              <td>رضا رضایی</td>
              <td>Reza1385</td>
              <td>Reza@gmail.com</td>
              <td>09125233247</td>
              <td>کاربر</td>
              <td>1404/05/03</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  فعال
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <FaUser className="text-sky-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>8</td>
              <td>مبینا سلامیان</td>
              <td>Mobina1391</td>
              <td>Mobina@gmail.com</td>
              <td>09125277898</td>
              <td>کاربر</td>
              <td>1404/06/18</td>

              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  بن شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaBan className="text-yellow-500 text-base md:text-xl" />
                  <FaUser className="text-sky-500 text-base md:text-xl" />
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

export default UserList;
