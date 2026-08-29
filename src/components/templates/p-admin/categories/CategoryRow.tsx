"use client";
import ConfirmModal from "@/components/modules/main/ConfirmModal";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import { deleteCategory } from "@/libs/actions/category.actions";
import { ICategory } from "@/libs/types";
import { formatDate } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function CategoryRow({
  index,
  name,
  href,
  tags,
  image,
  createdAt,
  parent,
  _id,
  onDelete,
}: ICategory) {
  const [isPending, startTransition] = useTransition();
  const deleteCategoryHandler = () => {
    startTransition(async () => {
      if (!_id) return;
      try {
        onDelete(_id);
        const result = await deleteCategory(_id);
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };
  return (
    <Table.Row>
      <td>{index}</td>
      <td className="!p-0 md:!p-5">
        <Image
          src={image}
          className="w-12 md:w-16 rounded-md mx-auto my-2 md:my-0"
          alt=""
          width={1920}
          height={1080}
        />
      </td>
      <td>
        <Link href={`/category/${href}`}>{name}</Link>
      </td>
      <td>{href}</td>
      <td>{parent?.name ?? "---"}</td>
      <td>{tags.slice(0, 3).join(" ، ")}</td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <Link href={`/p-admin/categories/${_id}`}>
            <FaPencil className="text-yellow-500 text-base md:text-xl" />
          </Link>
          <Modal>
            <Modal.Open name="delete">
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="delete">
              <ConfirmModal
                status="حذف کردن"
                onSubmit={deleteCategoryHandler}
                isLoading={isPending}
              />
            </Modal.Page>
          </Modal>
          <Link href={`/category/${href}`}>
            <FaEye className="text-sky-500 text-base md:text-xl" />
          </Link>
        </div>
      </td>
    </Table.Row>
  );
}

export default CategoryRow;
