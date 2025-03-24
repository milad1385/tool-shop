import Image from "next/image";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";

function Comment() {
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
              میلاد سلامیان{" "}
              <span className="font-bold text-sm md:text-base"> | کاربر</span>
            </span>
            <span className="font-dana text-sm text-gray-700">1403/12/30</span>
          </div>
        </div>
        <button className="border border-yellow-500 w-[40px] h-[40px] flex-center rounded-full hover:bg-yellow-50 transition-all">
          <HiOutlineArrowUturnLeft className="text-yellow-500 text-lg" />
        </button>
      </div>
      <p className="text-sm sm:text-base/[28px] text-justify font-light text-zinc-700">
        سلام ، دوستان وقتتون بخیر ، بین دوتا از ابزار های کاربردی با برند های
        رونیکس و فلوکس گیر کردم ، میخوام دریل شارژی بخرم ، شما کدوم برند رو
        پیشنهاد میدهید و دلیلتون برای انتخاب اون چیه ؟ ممنون میشم راهنمایی کنید
      </p>

      {/* replies */}
      <div className="mt-4 space-y-4">
        <div className="p-4 md:p-5 bg-gray-200 rounded-lg">
          <div className="pb-4 mb-4 border-b border-b-white/40">
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
                  محمد اکبری
                  <span className="font-bold text-sm md:text-base">
                    {" "}
                    | ادمین
                  </span>
                </span>
                <span className="text-sm text-gray-700">1403/12/30</span>
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base/[28px] text-justify font-light text-zinc-700">
            سلام ، میلاد جان ، من به عنوان کارشناس در این حوزه برند فولوکس را به
            شما پیشنهاد میدم ، به دلایل قیمت مناسب تر و همچنین استقامت و کیفیت
            بالاتر نسبت به برند رونیکس ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
