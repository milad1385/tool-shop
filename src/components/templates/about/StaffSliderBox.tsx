import { IStaffSliderBox } from "@/libs/types";
import Image from "next/image";
import React from "react";

function StaffSliderBox({ image }: IStaffSliderBox) {
  return (
    <Image
      src={`/images/about/${image}`}
      width={1920}
      height={1080}
      alt={image}
    />
  );
}

export default StaffSliderBox;
