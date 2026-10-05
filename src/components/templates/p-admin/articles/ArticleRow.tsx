import Table from "@/components/modules/p-admin/Table";
import { IArticle } from "@/libs/types";
import { formatDate, getArticleStatus } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPencil, FaXmark } from "react-icons/fa6";

function ArticleRow({
  title,
  image,
  link,
  tags,
  category,
  createdAt,
  index,
  status,
}: IArticle) {
  const { name, className } = getArticleStatus(status);
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
        <Link href={`/blog/${link}`}>{title}</Link>
      </td>

      <td>{tags.join(" ، ")}</td>
      <td>
        <Link href={`/category/${category.href}`}>{category.name}</Link>
      </td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <div className={`${className} rounded-3xl py-2`}>{name}</div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          <FaPencil className="text-yellow-500 text-base md:text-xl" />
          <FaTrash className="text-red-600 text-base md:text-xl" />
          <Link href={`/blog/${link}`}>
            <FaEye className="text-sky-500 text-base md:text-xl" />
          </Link>

          <FaXmark className="text-red-500 text-base md:text-2xl" />
        </div>
      </td>
    </Table.Row>
  );
}

export default ArticleRow;
