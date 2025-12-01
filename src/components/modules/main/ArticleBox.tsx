import { IArticle } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

function ArticleBox({ image, link, title }: IArticle) {
  return (
    <div className="bg-white shadow rounded-3xl p-4 overflow-hidden">
      <Link
        href={link}
        className="block overflow-hidden group relative rounded-3xl"
      >
        <div className="flex flex-col  absolute z-20 top-4 left-4 bg-white border-t-4 border-yellow-400 p-2 px-3 rounded-xl">
          <span className="font-IranMedium font-bold text-lg md:text-2xl">
            {formattedPrice(26)}
          </span>
          <span className="font-IranMedium text-xs md:text-sm">خرداد</span>
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
          src={`/images/${image}`}
          alt="blog-1"
          className="h-[200px] md:h-[260px] object-cover"
        />
      </Link>
      <Link href={link} className="flex items-center justify-between mt-3">
        <h3 className="font-Lalezar text-base md:text-lg">{title}</h3>
        <div className="flex items-center gap-x-2 text-sm md:text-lg">
          <span>بیشتر</span>
          <IoArrowBack className="text-lg" />
        </div>
      </Link>
    </div>
  );
}

export default ArticleBox;
