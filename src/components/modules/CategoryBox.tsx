import Image from "next/image";
import React from "react";

function CategoryBox() {
  return (
    <div className="bg-white w-[190px]  py-3 border border-slate-200  rounded-3xl leading-10 md:cursor-pointer">
      <Image
        width={1920}
        height={1080}
        className="w-[64px] h-[64px] mx-auto"
        alt="images"
        src="/images/ca-1.png"
      />
      <h3 className="font-Lalezar text-center text-lg mt-3">سنگ فرز</h3>
    </div>
  );
}

export default CategoryBox;
