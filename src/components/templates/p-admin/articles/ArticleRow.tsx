import ConfirmModal from "@/components/modules/main/ConfirmModal";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import {
  changeArticleStatus,
  deleteArticle,
} from "@/libs/actions/article.action";
import { IArticle } from "@/libs/types";
import { formatDate, getArticleStatus } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaEye, FaTrash } from "react-icons/fa";
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
  const [isDeleting, startDeleting] = useTransition();
  const [isChangingStatus, startChangingStatus] = useTransition();

  const deleteArticleHandler = () => {
    startDeleting(async () => {
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

  const changeArticleStatusHandler = (newStatus: "published" | "draft") => {
    startChangingStatus(async () => {
      if (!_id) return;
      try {
        const result = await changeArticleStatus(_id, newStatus);
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
        <div className={`${className} w-[90px] rounded-3xl py-2`}>{name}</div>
      </td>
      <td>
        <Modal>
          <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
            <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0">
              <FaPencil className="text-yellow-500 text-base md:text-xl" />
            </span>

            <Modal.Open name="delete">
              <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0">
                <FaTrash className="text-red-600 text-base md:text-xl" />
              </span>
            </Modal.Open>
            <Modal.Page name="delete">
              <ConfirmModal
                status="حذف کردن"
                onSubmit={deleteArticleHandler}
                isLoading={isDeleting}
              />
            </Modal.Page>

            <Link
              href={`/blog/${link}`}
              className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0 cursor-pointer"
            >
              <FaEye className="text-sky-500 text-base md:text-xl" />
            </Link>

            {status === "draft" && (
              <>
                <Modal.Open name="acceptModal">
                  <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0">
                    <FaCheck className="text-green-500 text-base md:text-xl" />
                  </span>
                </Modal.Open>
                <Modal.Page name="acceptModal">
                  <ConfirmModal
                    status="انتشار کردن"
                    isLoading={isChangingStatus}
                    onSubmit={() => changeArticleStatusHandler("published")}
                  />
                </Modal.Page>
              </>
            )}

            {status === "published" && (
              <>
                <Modal.Open name="declineModal">
                  <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0">
                    <FaXmark className="text-yellow-500 text-base md:text-xl" />
                  </span>
                </Modal.Open>
                <Modal.Page name="declineModal">
                  <ConfirmModal
                    status="رد کردن"
                    isLoading={isChangingStatus}
                    onSubmit={() => changeArticleStatusHandler("draft")}
                  />
                </Modal.Page>
              </>
            )}
          </div>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ArticleRow;
