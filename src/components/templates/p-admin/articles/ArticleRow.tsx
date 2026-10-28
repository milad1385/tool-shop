import ConfirmModal from "@/components/modules/main/ConfirmModal";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import { deleteArticle } from "@/libs/actions/article.action";
import { IArticle } from "@/libs/types";
import { formatDate, getArticleStatus } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function ArticleRow({
  _id,
  title,
  image,
  link,
  tags,
  category,
  createdAt,
  index,
  status,
  onDelete,
}: IArticle) {
  const { name, className } = getArticleStatus(status);
  const [isPending, startTransition] = useTransition();
  const deleteArticleHandler = () => {
    startTransition(async () => {
      if (!_id) return;
      try {
        onDelete(_id);
        const result = await deleteArticle(_id);
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
          className="w-28 rounded-md mx-auto"
          alt={title}
          width={1920}
          height={1080}
        />
      </td>
      <td>
        <Link href={`/blog/${link}`}>{title.slice(0, 30)}</Link>
      </td>

      <td>{tags.slice(0, 3).join(" ، ")}</td>
      <td>
        <Link href={`/category/${category.href}`}>{category.name}</Link>
      </td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <div className={`${className} rounded-3xl py-2`}>{name}</div>
      </td>
      <td>
        <Modal>
          <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
            <FaPencil className="text-yellow-500 text-base md:text-xl" />
            <Modal.Open name="delete">
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="delete">
              <ConfirmModal
                status="حذف کردن"
                onSubmit={deleteArticleHandler}
                isLoading={isPending}
              />
            </Modal.Page>
            <Link href={`/blog/${link}`}>
              <FaEye className="text-sky-500 text-base md:text-xl" />
            </Link>

            <FaXmark className="text-red-500 text-base md:text-2xl" />
          </div>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ArticleRow;
