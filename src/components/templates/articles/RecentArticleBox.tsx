import Image from "next/image";
import Link from "next/link";
import React from "react";

function RecentArticleBox({ image, title, description, link }) {
  return (
    <li>
      <Link href={`/blog/${link}`} className="flex items-center gap-x-4">
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="w-[64px] h-[64px] rounded-full object-cover"
        />
        <section className="flex flex-col space-y-1">
          <h3 className="font-Lalezar text-base md:text-lg text-zinc-700 line-clamp-2">
            {title}
          </h3>
          <p className="text-zinc-700 text-sm">{description}</p>
        </section>
      </Link>
    </li>
  );
}

export default RecentArticleBox;
