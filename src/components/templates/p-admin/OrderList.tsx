import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import Link from "next/link";
import { FaBan, FaCheck, FaEye, FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function OrderList() {
  return (
    <div className="section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>نام</th>
            <th>استان</th>
            <th>شهر</th>
            <th>مبلغ کل</th>
            <th>مبلغ تخفیف</th>
            <th>مبلغ نهایی</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td>میلاد سلامیان</td>
              <td>البرز</td>
              <td>کرج</td>
              <td>358,000 تومان</td>

              <td>50,000 تومان</td>
              <td>308,000 تومان</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تحویل
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/p-admin/orders/1"> <FaEye className="text-sky-500 text-base md:text-xl" /></Link>
                  <FaBan className="text-gray-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>
              <td>رضا عباسی</td>
              <td>تهران</td>
              <td>تهران</td>
              <td>400,000 تومان</td>

              <td>50,000 تومان</td>
              <td>350,000 تومان</td>
              <td>1404/04/26</td>
              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  پردازش
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/p-admin/orders/1"> <FaEye className="text-sky-500 text-base md:text-xl" /></Link>
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
              <td>محمد رضایی</td>
              <td>زنجان</td>
              <td>زنجان</td>
              <td>500,000 تومان</td>

              <td>25,000 تومان</td>
              <td>475,000 تومان</td>
              <td>1404/04/27</td>
              <td>
                <div className="bg-gray-500 text-white rounded-3xl py-2">
                  آماده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/p-admin/orders/1"> <FaEye className="text-sky-500 text-base md:text-xl" /></Link>
                  <FaXmark className="text-yellow-500 text-base md:text-2xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>4</td>
              <td>مبینا سلامیان</td>
              <td>البرز</td>
              <td>کرج</td>
              <td>800,000 تومان</td>

              <td>10,000 تومان</td>
              <td>790,000 تومان</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  لغو شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/p-admin/orders/1"> <FaEye className="text-sky-500 text-base md:text-xl" /></Link>
                  <FaBan className="text-gray-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>5</td>
              <td>آرمین امامی</td>
              <td>فارس</td>
              <td>شیراز</td>
              <td>950,000 تومان</td>

              <td>50,000 تومان</td>
              <td>900,000 تومان</td>
              <td>1404/04/29</td>
              <td>
                <div className="bg-purple-500 text-white rounded-3xl py-2">
                  مرجوع
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/p-admin/orders/1"> <FaEye className="text-sky-500 text-base md:text-xl" /></Link>
                  <FaBan className="text-gray-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>6</td>
              <td>مینا کیایی</td>
              <td>تهران</td>
              <td>ری</td>
              <td>850,000 تومان</td>

              <td>بدون تخفیف</td>
              <td>850,000 تومان</td>
              <td>1404/04/30</td>
              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تحویل
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/p-admin/orders/1"> <FaEye className="text-sky-500 text-base md:text-xl" /></Link>
                  <FaBan className="text-gray-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>7</td>
              <td>علی علیزاده</td>
              <td>زنجان</td>
              <td>زنجان</td>
              <td>500,000 تومان</td>

              <td>50,000 تومان</td>
              <td>450,000 تومان</td>
              <td>1404/04/29</td>
              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  پردازش
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/p-admin/orders/1"> <FaEye className="text-sky-500 text-base md:text-xl" /></Link>
                  <FaCheck className="text-green-500 text-base md:text-xl" />
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

export default OrderList;
