import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck, FaEye, FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function ArticleList() {
  return (
    <div className="section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>عکس</th>
            <th>عنوان</th>

            <th>تگ ها</th>
            <th>دسته بندی</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/blog-1.jpg"
                  className="w-28 rounded-md mx-auto"
                  alt="blog-1.jpg"
                  width={1920}
                  height={1080}
                />
              </td>
              <td>
                <Link href="/articles/1">مقاله اول</Link>
              </td>

              <td>آموزش ، روش استفاده ، دریل</td>
              <td>دریل</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  منتشر شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/blog/1">
                    <FaEye className="text-sky-500 text-base md:text-xl" />
                  </Link>

                  <FaXmark className="text-red-500 text-base md:text-2xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/blog-2.jpg"
                  className="w-28 rounded-md mx-auto"
                  alt="blog-2.jpg"
                  width={1920}
                  height={1080}
                />
              </td>
              <td>
                <Link href="/articles/1">مقاله دوم</Link>
              </td>

              <td>آموزش ، استفاده ، پیج</td>
              <td>پیج گوشتی</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  در انتظار
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/blog/1">
                    <FaEye className="text-sky-500 text-base md:text-xl" />
                  </Link>
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/blog-3.jpg"
                  className="w-28 rounded-md mx-auto"
                  alt="blog-2.jpg"
                  width={1920}
                  height={1080}
                />
              </td>
              <td>
                <Link href="/articles/3">مقاله سوم</Link>
              </td>

              <td>آموزش ، استفاده ، پیج</td>
              <td>پیج گوشتی</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  منتشر شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/blog/1">
                    <FaEye className="text-sky-500 text-base md:text-xl" />
                  </Link>
                   <FaXmark className="text-red-500 text-base md:text-2xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>4</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/blog-1.jpg"
                  className="w-28 rounded-md mx-auto"
                  alt="blog-1.jpg"
                  width={1920}
                  height={1080}
                />
              </td>
              <td>
                <Link href="/articles/1">مقاله اول</Link>
              </td>

              <td>آموزش ، روش استفاده ، دریل</td>
              <td>دریل</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  در انتظار
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/blog/1">
                    <FaEye className="text-sky-500 text-base md:text-xl" />
                  </Link>
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>5</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/blog-2.jpg"
                  className="w-28 rounded-md mx-auto"
                  alt="blog-2.jpg"
                  width={1920}
                  height={1080}
                />
              </td>
              <td>
                <Link href="/articles/1">مقاله دوم</Link>
              </td>

              <td>آموزش ، استفاده ، پیج</td>
              <td>پیج گوشتی</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  منتشر شده
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/blog/1">
                    <FaEye className="text-sky-500 text-base md:text-xl" />
                  </Link>
                   <FaXmark className="text-red-500 text-base md:text-2xl" />
                </div>
              </td>
            </Table.Row>
            <Table.Row>
              <td>6</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/blog-3.jpg"
                  className="w-28 rounded-md mx-auto"
                  alt="blog-2.jpg"
                  width={1920}
                  height={1080}
                />
              </td>
              <td>
                <Link href="/articles/3">مقاله سوم</Link>
              </td>
              <td>آموزش ، استفاده ، پیج</td>
              <td>پیج گوشتی</td>
              <td>1404/04/25</td>
              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  در انتظار
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaPencil className="text-yellow-500 text-base md:text-xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                  <Link href="/blog/1">
                    <FaEye className="text-sky-500 text-base md:text-xl" />
                  </Link>
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

export default ArticleList;
