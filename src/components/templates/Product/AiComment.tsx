import Image from "next/image";
import React from "react";
import { HiMinusCircle } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";

function AiComment() {
  return (
    <div className="w-full lg:w-[65%]">
      <div className="flex items-center gap-x-2">
        <Image
          alt="ai"
          width={1920}
          height={1080}
          src="/images/ai.svg"
          className="md:w-[40px] w-[35px] h-[35px] md:h-[40px]"
        />
        <div className="space-y-2">
          <h4 className="font-bold text-base md:text-lg">
            خلاصه دیدگاه‌های خریدارها
          </h4>
          <span className="text-xs md:font-bold text-gray-400">
            تولید شده با هوش مصنوعی
          </span>
        </div>
      </div>
      <div className="bg-[#ECEDFF] px-3 py-4 rounded-lg relative mt-4">
        <Image
          alt="arrow-ai"
          width={1920}
          height={1080}
          src="/images/arrowAi.svg"
          className="w-[22px] h-4  absolute -top-4"
        />
        <div className="whitespace-pre-wrap mb-4 text-sm/[28px] md:text-[15px]/[32px]">
          این لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 به عنوان یک گزینه مناسب
          برای مصارف خانگی و تحصیلی شناخته می‌شود. کاربران از کیفیت خوب صفحه
          نمایش، سرعت عملکرد بالا و وزن سبک دستگاه رضایت دارند و آن را برای
          تماشای فیلم و کارهای روزمره بسیار مناسب می‌دانند. همچنین حافظه SSD یک
          ترابایتی آن مزیتی بزرگ به نسبت مدل‌های مشابه محسوب می‌شود.
        </div>

        <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
          <div className="flex items-center gap-x-1 border border-gray-300 px-1.5 py-1 w-fit rounded-2xl">
            <IoIosCheckmarkCircle className="text-green-500 text-lg" />
            <p className="text-xs font-bold text-zinc-700">
              سرعت و عملکرد بالا
            </p>
          </div>
          <div className="flex items-center gap-x-1 border border-gray-300 px-1.5 py-1 w-fit rounded-2xl">
            <IoIosCheckmarkCircle className="text-green-500 text-lg" />
            <p className="text-xs font-bold text-zinc-700">
              سرعت و عملکرد بالا
            </p>
          </div>
          <div className="flex items-center gap-x-1 border border-gray-300 px-1.5 py-1 w-fit rounded-2xl">
            <IoIosCheckmarkCircle className="text-green-500 text-lg" />
            <p className="text-xs font-bold text-zinc-700">
              سرعت و عملکرد بالا
            </p>
          </div>
          <div className="flex items-center gap-x-1 border border-gray-300 px-1.5 py-1 w-fit rounded-2xl">
            <IoIosCheckmarkCircle className="text-green-500 text-lg" />
            <p className="text-xs font-bold text-zinc-700">
              سرعت و عملکرد بالا
            </p>
          </div>
          <div className="flex items-center gap-x-1 border border-gray-300 px-1.5 py-1 w-fit rounded-2xl">
            <HiMinusCircle className="text-red-600 text-lg" />
            <p className="text-xs font-bold text-zinc-700">کیفیت پایین باتری</p>
          </div>
          <div className="flex items-center gap-x-1 border border-gray-300 px-1.5 py-1 w-fit rounded-2xl">
            <HiMinusCircle className="text-red-600 text-lg" />
            <p className="text-xs font-bold text-zinc-700">کیفیت پایین باتری</p>
          </div>
          <div className="flex items-center gap-x-1 border border-gray-300 px-1.5 py-1 w-fit rounded-2xl">
            <HiMinusCircle className="text-red-600 text-lg" />
            <p className="text-xs font-bold text-zinc-700">کیفیت پایین باتری</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-5">
          این خلاصه ممکن است دقیق نباشد
        </p>
      </div>
    </div>
  );
}

export default AiComment;
