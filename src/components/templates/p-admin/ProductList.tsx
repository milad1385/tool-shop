
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import Image from "next/image";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

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
            <Table.Row>
              <td>1</td>
              <td className="!p-0 md:!p-5">
                <Image
     src="/images/product-7.jpg"
                  className="w-20 rounded-md mx-auto"
                  alt=""
                  width={1920}
                  height={1080}
                />
              </td>
              <td>دریل رونیکس</td>
              <td>Ronix</td>
              <td>دریل</td>
              <td>رونیکس ، ابزار</td>
              <td>1404/04/25</td>
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
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/product-1.jpg"
                  className="w-20 rounded-md mx-auto"
                  alt=""
                  width={1920}
                  height={1080}
                />
              </td>
              <td>دریل رونیکس</td>
              <td>Ronix</td>
              <td>دریل</td>
              <td>رونیکس ، ابزار</td>
              <td>1404/04/25</td>
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
              <td className="!p-0 md:!p-5">
                <Image
                   src="/images/product-2.jpg"
                  className="w-20 rounded-md mx-auto"
                  alt=""
                  width={1920}
                  height={1080}
                />
              </td>
              <td>دریل رونیکس</td>
              <td>Ronix</td>
              <td>دریل</td>
              <td>رونیکس ، ابزار</td>
              <td>1404/04/25</td>
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
              <td className="!p-0 md:!p-5">
                <Image
                       src="/images/product-4.jpg"
                  className="w-20 rounded-md mx-auto"
                  alt=""
                  width={1920}
                  height={1080}
                />
              </td>
              <td>دریل رونیکس</td>
              <td>Ronix</td>
              <td>دریل</td>
              <td>رونیکس ، ابزار</td>
              <td>1404/04/25</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <FaEye className="text-sky-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>5</td>
              <td className="!p-0 md:!p-5">
                <Image
                    src="/images/product-6.jpg"
                  className="w-20 rounded-md mx-auto"
                  alt=""
                  width={1920}
                  height={1080}
                />
              </td>
              <td>دریل رونیکس</td>
              <td>Ronix</td>
              <td>دریل</td>
              <td>رونیکس ، ابزار</td>
              <td>1404/04/25</td>
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
        <Pagination count={10} />
      </div>
    </div>
  );
}

export default ProductList;
