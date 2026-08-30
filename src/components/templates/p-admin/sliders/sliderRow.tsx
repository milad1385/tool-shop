import Table from "@/components/modules/p-admin/Table";
import { ISlider } from "@/libs/types";
import { formatDate } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function SliderRow({
  index,
  title,
  href,
  image,
  priority,
  status,
  createdAt,
}: ISlider) {
  console.log(status);

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
        <Link href={href}>{title}</Link>
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
          <FaPencil className="text-sky-500 text-base md:text-xl" />
          <FaTrash className="text-red-600 text-base md:text-xl" />

          <FaXmark className="text-yellow-500 text-base md:text-2xl" />
        </div>
      </td>
    </Table.Row>
  );
}

export default SliderRow;
