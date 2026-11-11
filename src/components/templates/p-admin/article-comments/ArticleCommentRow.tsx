import ConfirmModal from "@/components/modules/main/ConfirmModal";
import DeleteModal from "@/components/modules/main/DeleteModal";
import Modal from "@/components/modules/main/Modal";
import ShowCommentModal from "@/components/modules/main/ShowCommentModal";
import Table from "@/components/modules/p-admin/Table";
import {
  changeArticleCommentStatus,
  deleteArticleComment,
} from "@/libs/actions/articleComment.action";
import { IArticleComment, UserRoleEnums } from "@/libs/types";
import { formatDate, getStatusConfig } from "@/utils/helper";
import Link from "next/link";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaEye, FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function ArticleCommentRow({
  user,
  article,
  status,
  comment,
  createdAt,
  index,
  _id,
  roles,
  onDelete,
}: IArticleComment) {
  const [isChanging, startChangingStatus] = useTransition();
  const [isDeleting, startDeleting] = useTransition();
  const { label, className } = getStatusConfig(status);

  const hasPermission = roles?.includes(UserRoleEnums.SUPER_ADMIN);

  const changeCommentStatusHandler = (newStatus: "accept" | "reject") => {
    startChangingStatus(async () => {
      if (!_id) return;
      try {
        const result = await changeArticleCommentStatus(_id, newStatus);
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

  const deleteCommentHandler = () => {
    startDeleting(async () => {
      if (!_id) return;
      try {
        onDelete(_id);
        const result = await deleteArticleComment(_id);
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
      <td>{user.fullname}</td>
      <td>{user.username}</td>
      <td>
        <Link href={`/blog/${article.link}`}>{article.title}</Link>
      </td>

      <td>{formatDate(createdAt)}</td>

      <td className="flex-center">
        <div className={`${className} rounded-3xl px-4 py-2 w-[125px]`}>
          {label}
        </div>
      </td>
      <td>
        <Modal>
          <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
            {status === "pending" && hasPermission && (
              <>
                <Modal.Open name="declineModal">
                  <FaXmark className="text-red-500 text-base md:text-2xl" />
                </Modal.Open>

                <Modal.Open name="acceptModal">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                </Modal.Open>
              </>
            )}

            {status === "accept" && hasPermission && (
              <Modal.Open name="declineModal">
                <FaXmark className="text-red-500 text-base md:text-2xl" />
              </Modal.Open>
            )}

            {status === "reject" && hasPermission && (
              <Modal.Open name="acceptModal">
                <FaCheck className="text-green-500 text-base md:text-xl" />
              </Modal.Open>
            )}

            <Modal.Page name="declineModal">
              <ConfirmModal
                status="رد"
                isLoading={isChanging}
                onSubmit={() => changeCommentStatusHandler("reject")}
              />
            </Modal.Page>
            <Modal.Page name="acceptModal">
              <ConfirmModal
                status="تایید"
                isLoading={isChanging}
                onSubmit={() => changeCommentStatusHandler("accept")}
              />
            </Modal.Page>
            <Modal.Open name="showComment">
              <FaEye className="text-sky-500 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Page name="showComment">
              <ShowCommentModal comment={comment} name={user.fullname} />
            </Modal.Page>
            {hasPermission && (
              <>
                <Modal.Open name="delete">
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </Modal.Open>
                <Modal.Page name="delete">
                  <ConfirmModal
                    status="حذف کردن"
                    onSubmit={deleteCommentHandler}
                    isLoading={isDeleting}
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

export default ArticleCommentRow;
