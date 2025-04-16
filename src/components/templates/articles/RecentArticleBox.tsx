import { IRecentArticleBox } from "@/libs/types";
import Image from "next/image";
import React from "react";

function RecentArticleBox({ image, title, description }: IRecentArticleBox) {
  return (
    <li className="flex items-center gap-x-4">
      <Image
        src={`/images/${image}`}
        alt={title}
        width={1920}
        height={1080}
        className="w-[64px] h-[64px] rounded-full"
      />
      <div className="flex flex-col space-y-1">
        <h3 className="font-Lalezar text-base md:text-lg text-zinc-700">
          {title}
        </h3>
        <p className="text-zinc-700 text-sm">{description}</p>
      </div>
    </li>
  );
}

export default RecentArticleBox;
