"use client";
import Modal from "@/components/modules/main/Modal";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaTrash } from "react-icons/fa";
import ProductInfoModal from "./ProductInfoModal";
import DeleteModal from "@/components/modules/main/DeleteModal";

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
            <th>وضعیت</th>

            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/product-7.jpg"
                  className="w-20 rounded-md mx-auto my-2 md:my-0"
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

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2">
                  تایید شده
                </div>
              </td>
              <td>
                <Modal>
                  <div className="flex-center my-3 gap-x-3 md:gap-x-6 child:cursor-pointer">
                    <Modal.Open name="deleteProduct">
                      <FaTrash className="text-red-600 text-base md:text-xl" />
                    </Modal.Open>
                    <Modal.Page name="deleteProduct">
                      <DeleteModal isQuestion />
                    </Modal.Page>
                    <Modal.Open name="productInfo">
                      <FaEye className="text-sky-500 text-base md:text-xl" />
                    </Modal.Open>
                    <Modal.Page name="productInfo">
                      <ProductInfoModal />
                    </Modal.Page>
                  </div>
                </Modal>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/product-7.jpg"
                  className="w-20 rounded-md mx-auto my-2 md:my-0"
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

              <td>
                <div className="bg-yellow-500 text-white rounded-3xl py-2">
                  در حال بررسی
                </div>
              </td>
              <td>
                <Modal>
                  <div className="flex-center my-3 gap-x-3 md:gap-x-6 child:cursor-pointer">
                    <Modal.Open name="deleteProduct">
                      <FaTrash className="text-red-600 text-base md:text-xl" />
                    </Modal.Open>
                    <Modal.Page name="deleteProduct">
                      <DeleteModal isQuestion />
                    </Modal.Page>
                    <Modal.Open name="productInfo">
                      <FaEye className="text-sky-500 text-base md:text-xl" />
                    </Modal.Open>
                    <Modal.Page name="productInfo">
                      <ProductInfoModal />
                    </Modal.Page>
                  </div>
                </Modal>
              </td>
            </Table.Row>
            <Table.Row>
              <td>3</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src="/images/product-7.jpg"
                  className="w-20 rounded-md mx-auto my-2 md:my-0"
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

              <td>
                <div className="bg-red-500 text-white rounded-3xl py-2">
                  رد شده
                </div>
              </td>
              <td>
                <Modal>
                  <div className="flex-center my-3 gap-x-3 md:gap-x-6 child:cursor-pointer">
                    <Modal.Open name="deleteProduct">
                      <FaTrash className="text-red-600 text-base md:text-xl" />
                    </Modal.Open>
                    <Modal.Page name="deleteProduct">
                      <DeleteModal isQuestion />
                    </Modal.Page>
                    <Modal.Open name="productInfo">
                      <FaEye className="text-sky-500 text-base md:text-xl" />
                    </Modal.Open>
                    <Modal.Page name="productInfo">
                      <ProductInfoModal />
                    </Modal.Page>
                  </div>
                </Modal>
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
