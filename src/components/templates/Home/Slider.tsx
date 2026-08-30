"use client";
import { ISlider } from "@/libs/types";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider({ sliders }: { sliders: ISlider[] }) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mt-28 md:mt-48"
    >
      {sliders.map((slider) => (
        <SwiperSlide key={slider._id}>
          <Image
            className="rounded-xl h-[160px] object-cover md:h-full"
            width={1920}
            height={1080}
            src={slider.image}
            alt={slider.title}
            title={slider.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
