import { ISeller } from "@/libs/types";
import { formatDate } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

function SellerBox({ name, cover, _id, city, createdAt }: ISeller) {
  return (
    <div className="bg-white shadow rounded-3xl p-4 overflow-hidden">
      <Link
        href={`/sellers/${_id}`}
        className="block overflow-hidden group relative rounded-3xl"
      >
        <div className="flex flex-col  absolute z-20 top-4 left-4 bg-white border-t-4 border-yellow-400 p-2 px-3 rounded-xl">
          <span className="font-IranMedium font-bold text-lg md:text-xl">
            {formatDate(createdAt)}
          </span>
          <span className="font-IranMedium text-xs text-gray-600 md:text-sm">
            {city}
          </span>
        </div>

        <div className="bg-black/50 absolute inset-0 flex-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all md:cursor-pointer ">
          <Image
            src="/images/logo.png"
            alt="logo.png"
            className="w-[124px] h-[41px]"
            width={1920}
            height={1080}
          />
        </div>

        <Image
          width={1920}
          height={1080}
          src={cover}
          alt={name}
          className="h-[200px] md:h-[260px] object-cover"
        />
      </Link>
      <Link
        href={`/sellers/${_id}`}
        className="flex items-center justify-between mt-3"
      >
        <h3 className="font-Lalezar text-base md:text-lg">{name}</h3>
        <div className="flex items-center gap-x-2 text-sm md:text-lg">
          <span>بیشتر</span>
          <IoArrowBack />
        </div>
      </Link>
    </div>
  );
}

export default SellerBox;
