import Table from "@/components/modules/p-admin/Table";
import { IProduct } from "@/libs/types";
import { formatDate } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

function ProductItemRow({
  index,
  images,
  name,
  slug,
  category,
  createdAt,
}: IProduct) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td className="!p-0 md:!p-5">
        <Image
          src={images[0]}
          className="w-20 rounded-md mx-auto my-2 md:my-0"
          alt={name}
          width={1920}
          height={1080}
        />
      </td>
      <td>
        <Link href={`/products/${slug}`}>{name}</Link>
      </td>
      <td>{slug}</td>
      <td>{category.name}</td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <FaPencil className="text-yellow-500 text-base md:text-xl" />
          <FaTrash className="text-red-600 text-base md:text-xl" />
          <Link href={`/products/${slug}`}>
            <FaEye className="text-sky-500 text-base md:text-xl" />
          </Link>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProductItemRow;
