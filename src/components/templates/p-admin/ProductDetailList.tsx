import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function ProductDetailList() {
  return (
    <div className="section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>نام محصول</th>
            <th>قیمت</th>
            <th> تخفیف</th>
            <th>نام رنگ</th>
            <th>کد رنگ</th>
            <th>موجودی</th>
            <th>تاریخ</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <td>1</td>

              <td>دریل رونیکس</td>
              <td>2,500,000 تومان</td>
              <td>25%</td>
              <td>زرد</td>
              <td className="flex items-center justify-center">
                <div className="bg-yellow-500 h-[40px] w-[40px] rounded-md"></div>
              </td>
              <td>28 عدد</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>

              <td>اره برقی</td>
              <td>1,500,000 تومان</td>
              <td>32%</td>
              <td>بنفش</td>
              <td className="flex items-center justify-center">
                <div className="bg-purple-500 h-[40px] w-[40px] rounded-md"></div>
              </td>
              <td>28 عدد</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
             <Table.Row>
              <td>3</td>

              <td>پیج گوشتی</td>
              <td>500,000 تومان</td>
              <td>12%</td>
              <td>قرمز</td>
              <td className="flex items-center justify-center">
                <div className="bg-red-500 h-[40px] w-[40px] rounded-md"></div>
              </td>
              <td>18 عدد</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
             <Table.Row>
              <td>4</td>

              <td>دریل رونیکس</td>
              <td>2,500,000 تومان</td>
              <td>25%</td>
              <td>زرد</td>
              <td className="flex items-center justify-center">
                <div className="bg-yellow-500 h-[40px] w-[40px] rounded-md"></div>
              </td>
              <td>28 عدد</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>5</td>

              <td>اره برقی</td>
              <td>1,500,000 تومان</td>
              <td>32%</td>
              <td>بنفش</td>
              <td className="flex items-center justify-center">
                <div className="bg-purple-500 h-[40px] w-[40px] rounded-md"></div>
              </td>
              <td>28 عدد</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
             <Table.Row>
              <td>6</td>

              <td>پیج گوشتی</td>
              <td>500,000 تومان</td>
              <td>12%</td>
              <td>قرمز</td>
              <td className="flex items-center justify-center">
                <div className="bg-red-500 h-[40px] w-[40px] rounded-md"></div>
              </td>
              <td>18 عدد</td>
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

export default ProductDetailList;
