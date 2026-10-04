"use client";
import ConfirmModal from "@/components/modules/main/ConfirmModal";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import { changeSellerStatus, deleteSeller } from "@/libs/actions/seller.action";
import { formatDate, getStatusConfig } from "@/utils/helper";
import Link from "next/link";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function SellerItem({
  index,
  user,
  name,
  contactDetails,
  city,
  createdAt,
  status,
  hasPermission,
  _id,
}) {
  const [isPending, startTransition] = useTransition();
  const { label, className } = getStatusConfig(status);

  const changeSellerStatusHandler = (newStatus) => {
    startTransition(async () => {
      const result = await changeSellerStatus(_id, newStatus);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  const deleteSellerHandler = () => {
    startTransition(async () => {
      const result = await deleteSeller(_id);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Table.Row>
      <td>{index}</td>
      <td>{user.fullname}</td>
      <td>
        <Link href={`/sellers/${_id}`}>{name}</Link>
      </td>
      <td>{contactDetails.phone}</td>

      <td>{city}</td>
      <td>{formatDate(createdAt)}</td>

      <td>
        <div className={`${className} rounded-3xl py-2 px-2.5`}>{label}</div>
      </td>

      {hasPermission && (
        <td>
          <Modal>
            <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              {status === "pending" && (
                <>
                  <Modal.Open name="accept">
                    <FaCheck className="text-green-500 text-base md:text-2xl" />
                  </Modal.Open>

                  <Modal.Open name="decline">
                    <FaXmark className="text-red-500 text-base md:text-2xl" />
                  </Modal.Open>
                </>
              )}

              {status === "accept" && (
                <Modal.Open name="decline">
                  <FaXmark className="text-red-500 text-base md:text-2xl" />
                </Modal.Open>
              )}

              {status === "reject" && (
                <Modal.Open name="accept">
                  <FaCheck className="text-green-500 text-base md:text-2xl" />
                </Modal.Open>
              )}

              <Modal.Open name="delete">
                <FaTrash className="text-red-600 text-base md:text-xl" />
              </Modal.Open>
            </div>

            <Modal.Page name="delete">
              <ConfirmModal
                status="حذف کردن"
                onSubmit={deleteSellerHandler}
                isLoading={isPending}
              />
            </Modal.Page>

            <Modal.Page name="accept">
              <ConfirmModal
                status="تایید کردن"
                onSubmit={() => changeSellerStatusHandler("accept")}
                isLoading={isPending}
              />
            </Modal.Page>

            <Modal.Page name="decline">
              <ConfirmModal
                status="رد کردن"
                onSubmit={() => changeSellerStatusHandler("reject")}
                isLoading={isPending}
              />
            </Modal.Page>
          </Modal>
        </td>
      )}
    </Table.Row>
  );
}

export default SellerItem;
