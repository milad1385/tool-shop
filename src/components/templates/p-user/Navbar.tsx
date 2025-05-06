import { getDate } from "@/utils/helper";
import Image from "next/image";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="bg-white shadow p-5 mb-10 flex items-center justify-between">
      <div className="flex items-center gap-x-5">
        <Image
          src="/images/logo.png"
          alt="logo.png"
          className="w-[100px] md:w-[124px] h-[35px] md:h-[41px] select-none"
          width={1920}
          height={1080}
        />
        <div className="w-px h-10 bg-gray-300 hidden md:block"></div>
        <div>
          <p className="hidden md:block">
            <span className="font-Lalezar text-lg text-yellow-500">
              میلاد سلامیان
            </span>{" "}
            عزیز ، به پنل کاربری خود خوش آمدید ({getDate()}) 🔥
          </p>
        </div>
      </div>

      <button className="bg-gray-100 size-10 flex-center rounded-md hover:bg-gray-200 transition-all">
        <HiMiniArrowRightEndOnRectangle className="text-2xl text-zinc-700" />
      </button>
    </div>
  );
}

export default Navbar;
