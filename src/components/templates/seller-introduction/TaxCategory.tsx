import { ITaxCategory } from "@/libs/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TaxCategory({ id, image, link, max, min, title }: ITaxCategory) {
  return (
    <Link key={id} className="space-y-3 flex flex-col items-center md:items-start" href={link}>
      <Image
        alt="image"
        width={1920}
        height={1080}
        src={`/images/${image}`}
        className="w-[50px]"
      />
      <p className="font-bold text-sm md:text-base">{title}</p>
      <p className="text-xs font-bold text-zinc-500">
        از {min} ٪ تا {max} ٪ کمیسیون
      </p>
    </Link>
  );
}

export default TaxCategory;
