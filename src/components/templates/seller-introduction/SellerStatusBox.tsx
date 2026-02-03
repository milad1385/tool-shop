"use client";
import { ISellerStatus } from "@/libs/types";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { HiChevronLeft } from "react-icons/hi";

function SellerStatusBox({
  title,
  image,
  description,
  buttonText,
  type,
}: ISellerStatus) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleNextStep = (value: string) => {
    console.log(value);
    params.set("seller-type", value);
    router.push(`${pathname}?${params}`);
  };
  return (
    <div className="w-[320px] md:w-auto border border-gray-300 rounded-lg px-6 py-5 bg-gray-50">
      <Image
        alt="personal image"
        width={1920}
        height={1080}
        src={image}
        className="w-[150px] md:w-[200px] mx-auto"
      />
      <h2 className="text-base md:text-lg font-bold my-5">{title}</h2>
      <p className="w-[270px] md:w-[328px] text-zinc-600 text-justify text-[13px]/[28px] md:text-base/[32px] mb-5">
        {description}
      </p>
      <div className="flex justify-end">
        <button
          onClick={() => handleNextStep(type)}
          className="flex items-center gap-x-3 bg-yellow-500 py-3 px-3 text-white rounded-lg text-sm md:text-base"
        >
          {buttonText} <HiChevronLeft />
        </button>
      </div>
    </div>
  );
}

export default SellerStatusBox;
