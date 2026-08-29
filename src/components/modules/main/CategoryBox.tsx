import { ICategory } from "@/libs/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryBox({ name, image, href }: ICategory) {
  return (
    <Link
      href={`/category/${href}`}
      className="block bg-white   py-3 border border-slate-200  rounded-3xl leading-10 md:cursor-pointer"
    >
      <Image
        width={1920}
        height={1080}
        className="w-[64px] h-[64px] mx-auto"
        alt="images"
        src={image}
      />
      <h3 className="font-Lalezar text-center text-lg mt-3">{name}</h3>
    </Link>
  );
}

export default CategoryBox;
