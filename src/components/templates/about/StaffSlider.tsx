"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Title from "@/components/modules/Title";

export default function StaffSlider() {
  return (
    <div className="my-24 px-4 md:px-0">
      <Title title="نیروی های ترازو" />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/about/pic-1.jpg"
            width={1920}
            height={1080}
            alt="pic1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/about/pic-2.jpg"
            width={1920}
            height={1080}
            alt="pic2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/about/pic-3.jpg"
            width={1920}
            height={1080}
            alt="pic3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/about/pic-4.jpg"
            width={1920}
            height={1080}
            alt="pic4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
