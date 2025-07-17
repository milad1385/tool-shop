import Image from "next/image";
import React from "react";

function ArticleCommentItem() {
  return (
    <div className="p-4 md:p-5 bg-gray-100 rounded-lg">
      <div className="pb-4 mb-4 border-b border-b-neutral-200/60 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="flex-center w-14 h-14 p-1 border border-gray-300  rounded-full">
            <Image
              src="/images/user.jpg"
              alt="user.jpg"
              width={1920}
              height={1080}
              className="w-12 h-12 block object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-sm md:text-base">
              میلاد سلامیان
              <span className="font-bold text-sm md:text-base"> | کاربر</span>
            </span>
            <span className="font-dana text-sm text-gray-700">1403/12/30</span>
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base/[28px] text-justify font-light text-zinc-700">
        سلام ، دوستان وقتتون بخیر ، بین دوتا از ابزار های کاربردی با برند های
        رونیکس و فلوکس گیر کردم ، میخوام دریل شارژی بخرم ، شما کدوم برند رو
        پیشنهاد میدهید و دلیلتون برای انتخاب اون چیه ؟ ممنون میشم راهنمایی کنید
      </p>
    </div>
  );
}

export default ArticleCommentItem;
