import { IProduct } from "@/libs/types";
import { formatDate, formattedPrice, getCheapestPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaTrash } from "react-icons/fa";

function ProductRow({
  name,
  images,
  slug,
  index,
  createdAt,
  sellers,
}: IProduct) {
  const { finalPrice } = getCheapestPrice(sellers);
  return (
    <tr className="border-b border-gray-100">
      <td className="px-2 py-2 text-center">{index}</td>
      <td className="px-2 py-2 text-center">
        <Link href={`/products/${slug}`}>
          <Image
            src={images[0]}
            alt="product.jpg"
            width={1920}
            height={1080}
            className="w-12 md:w-12 h-12 md:h-12 rounded-full mx-auto object-cover"
          />
        </Link>
      </td>
      <td className="px-2 py-2 text-center">
        <Link href={`/products/${slug}`}>{name.slice(0, 20)}</Link>
      </td>
      <td className="px-2 py-2 text-center">{formatDate(createdAt)}</td>
      <td className="px-2 py-2 text-center">{formattedPrice(finalPrice)}</td>
      <td className="px-2 py-2 text-center">
        <div className="flex items-center gap-x-3 justify-center">
          <Link href={`/products/${slug}`}>
            <FaEye className="text-yellow-500 text-base  cursor-pointer  transition-colors" />
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;
