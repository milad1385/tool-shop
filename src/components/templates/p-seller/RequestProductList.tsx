import React from "react";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import Image from "next/image";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Link from "next/link";

function RequestProductList() {
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
            <th>تاریخ</th>
            <th>موجودی</th>
            <th>وضعیت</th>

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
              <td>
                <Link href="/products/1">Ronix</Link>
              </td>
              <td>دریل</td>

              <td>1404/04/25</td>
              <td className="flex-center my-3">
                <div className="flex flex-col space-y-3 py-3">
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-red-500 rounded-full"></span>
                    <span> قرمز : 5</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-sky-500 rounded-full"></span>
                    <span> آبی : 10</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-yellow-500 rounded-full"></span>
                    <span> زرد : 8</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تایید شده
                </div>
              </td>
              <td>
                <div className="flex-center my-3 gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <FaEye className="text-sky-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
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
              <td>
                <Link href="/products/1">Ronix</Link>
              </td>
              <td>دریل</td>

              <td>1404/04/25</td>
              <td className="flex-center my-3">
                <div className="flex flex-col space-y-3 py-3">
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-red-500 rounded-full"></span>
                    <span> قرمز : 5</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-sky-500 rounded-full"></span>
                    <span> آبی : 10</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-yellow-500 rounded-full"></span>
                    <span> زرد : 8</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  بررسی کنید
                </div>
              </td>
              <td>
                <div className="flex-center my-3 gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <FaEye className="text-sky-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
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
              <td>
                <Link href="/products/1">Ronix</Link>
              </td>
              <td>دریل</td>

              <td>1404/04/25</td>
              <td className="flex-center my-3">
                <div className="flex flex-col space-y-3 py-3">
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-red-500 rounded-full"></span>
                    <span> قرمز : 5</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-sky-500 rounded-full"></span>
                    <span> آبی : 10</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="block w-[15px] h-[15px] bg-yellow-500 rounded-full"></span>
                    <span> زرد : 8</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  رد شده
                </div>
              </td>
              <td>
                <div className="flex-center my-3 gap-x-3 md:gap-x-6 child:cursor-pointer">
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

export default RequestProductList;
