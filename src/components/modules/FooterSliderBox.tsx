import { IFooterSliderBox } from "@/libs/types";
import Image from "next/image";

function FooterSliderBox({ img }: IFooterSliderBox) {
  return (
    <Image
      src={img}
      alt={img}
      width={1920}
      height={1080}
      className="w-[100px] md:w-[120px] lg:w-[140px] mx-auto"
    />
  );
}

export default FooterSliderBox;
