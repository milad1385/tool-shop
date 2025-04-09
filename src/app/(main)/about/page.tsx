import AboutUsBox from "@/components/modules/AboutUsBox";
import Title from "@/components/modules/Title";
import StaffSlider from "@/components/templates/about/StaffSlider";
import Image from "next/image";
import React from "react";
import { FaRegFaceSmile } from "react-icons/fa6";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";

function page() {
  return (
    <>
      <div className="container">
        <div className="my-14">
          <Title title="درباره ما" />
        </div>
        <div className="grid grid-cols-12 gap-8 mx-auto">
          <div className="col-span-11 md:col-span-3 flex flex-col justify-center">
            <AboutUsBox
              title="1500 محصول"
              desc="انواع ترازو و ابزارآلات"
              icon={<LiaToolsSolid className="text-[40px] text-white" />}
            />
            <AboutUsBox
              title="10 سال فعالیت"
              desc="اولین مارکت فروش ابزار در ایران"
              icon={<IoCalendarOutline className="text-[40px] text-white" />}
            />
          </div>
          <div className="col-span-11 md:col-span-6">
            <Image
              src="/images/about.jpg"
              alt="about.jpg"
              width={1920}
              height={1080}
              className="w-full rounded-2xl shadow"
            />
          </div>
          <div className="col-span-11 md:col-span-3 flex flex-col justify-center">
            <AboutUsBox
              title="رضایت کاربران"
              desc="بالای 1 میلیون رضایت کاربران"
              icon={<FaRegFaceSmile className="text-[40px] text-white" />}
            />
            <AboutUsBox
              title="ارزان تر از همه جا"
              desc="خرید 1000 محصول با کد تخفیف"
              icon={<HiOutlineTicket className="text-[40px] text-white" />}
            />
          </div>
        </div>
      </div>
      <StaffSlider />
    </>
  );
}

export default page;
