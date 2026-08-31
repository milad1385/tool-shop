import ConfirmModal from "@/components/modules/main/ConfirmModal";
import Modal from "@/components/modules/main/Modal";
import Table from "@/components/modules/p-admin/Table";
import { changeStatus, deleteSlider } from "@/libs/actions/slider.action";
import { ISlider } from "@/libs/types";
import { formatDate } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function SliderRow({
  _id,
  index,
  title,
  href,
  image,
  priority,
  status,
  createdAt,
  onDelete,
}: ISlider) {
  const [isPending, startTransition] = useTransition();

  const deleteSliderHandler = () => {
    startTransition(async () => {
      if (!_id) return;
      try {
        onDelete(_id);
        const result = await deleteSlider(_id);
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

  const changeSliderStatusHandler = () => {
    startTransition(async () => {
      if (!_id) return;
      try {
        const result = await changeStatus(_id);
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

  const getMainBgColor = (status) => {
    if (status === "ACCEPT") {
      return { color: "bg-green-600", title: "تایید شده" };
    } else if (status === "PENDING") {
      return { color: "bg-yellow-500", title: "در حال بررسی" };
    } else {
      return { color: "bg-red-600", title: "رد شده" };
    }
  };
  return (
    <Table.Row>
      <td>{index}</td>
      <td className="!p-0 md:!p-5">
        <Image
          src={image}
          className="w-[100px] h-[50px] md:w-[200px] md:h-[90px] my-2 md:my-0 object-cover rounded-md mx-auto"
          alt="slider-2.jpg"
          width={1920}
          height={1080}
        />
      </td>
      <td>
        <Link href={`/category/${href}`}>{title}</Link>
      </td>

      <td>{formatDate(createdAt)}</td>
      <td>{priority}</td>
      <td>
        <div
          className={`${getMainBgColor(status).color} text-white rounded-3xl py-2`}
        >
          {getMainBgColor(status).title}
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <Link href={`/p-admin/sliders/${_id}`}>
            <FaPencil className="text-sky-500 text-base md:text-xl" />
          </Link>
          <Modal>
            <Modal.Open name="delete">
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </Modal.Open>
            <Modal.Open name="status">
              {status === "ACCEPT" ? (
                <FaXmark className="text-yellow-500 text-base md:text-2xl" />
              ) : (
                <FaCheck className="text-green-500 text-base md:text-xl" />
              )}
            </Modal.Open>
            <Modal.Page name="delete">
              <ConfirmModal
                status="حذف کردن"
                onSubmit={deleteSliderHandler}
                isLoading={isPending}
              />
            </Modal.Page>
            <Modal.Page name="status">
              <ConfirmModal
                status={status === "ACCEPT" ? "رد کردن" : "تایید کردن"}
                onSubmit={changeSliderStatusHandler}
                isLoading={isPending}
              />
            </Modal.Page>
          </Modal>
        </div>
      </td>
    </Table.Row>
  );
}

export default SliderRow;
