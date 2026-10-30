import Image from "next/image";
import React from "react";

function ArticleDeatils({ image, content }) {
  return (
    <>
      <Image
        src={image}
        alt={image}
        width={1920}
        height={1080}
        className="w-full rounded-2xl"
      />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="my-12 space-y-5 text-sm/[30px] md:text-base/[32px] article-content"
      ></div>
    </>
  );
}

export default ArticleDeatils;
