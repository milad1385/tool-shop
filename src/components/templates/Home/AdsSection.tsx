import Image from "next/image";
import React from "react";

function AdsSection() {
  return (
    <div className="grid grid-cols-2 gap-4 my-10">
      <Image
        width={1920}
        height={1080}
        alt="banner2"
        src="/images/banner2.png"
        className="rounded-3xl shadow"
      />
      <Image
        width={1920}
        height={1080}
        alt="banner1"
        src="/images/banner1.png"
        className="rounded-3xl shadow"
      />
    </div>
  );
}

export default AdsSection;
