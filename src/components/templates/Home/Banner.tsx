import Image from "next/image";
import React from "react";

function Banner({ src }: IBanner) {
  return (
    <div className="my-10 relative">
      <div className="absolute inset-0 rounded-3xl  bg-black/20"></div>
      <Image
        width={1920}
        height={1080}
        alt="banner"
        src={`/images/${src}`}
        className="w-full rounded-3xl shadow h-28 md:h-auto object-fill"
      />
    </div>
  );
}

export default Banner;
