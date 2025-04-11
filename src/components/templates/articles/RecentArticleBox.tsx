import Image from "next/image";
import React from "react";

function RecentArticleBox() {
  return (
    <li className="flex items-center gap-x-4">
      <Image
        src="/images/blog-1.jpg"
        alt="blog-1"
        width={1920}
        height={1080}
        className="w-[64px] h-[64px] rounded-full"
      />
      <div className="flex flex-col space-y-1">
        <h3 className="font-Lalezar text-base md:text-lg text-zinc-700">
          جذاب ترین ایده دکوراسیون
        </h3>
        <p className="text-zinc-700 text-sm">لورم ایپسوم متن ساختگی</p>
      </div>
    </li>
  );
}

export default RecentArticleBox;
