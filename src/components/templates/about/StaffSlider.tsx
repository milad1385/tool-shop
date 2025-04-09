"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Title from "@/components/modules/Title";
import { EffectCoverflow, Pagination } from "swiper/modules";
import StaffSliderBox from "./StaffSliderBox";

export default function StaffSlider() {
  const slides = [
    { id: 1, image: "pic-1.jpg" },
    { id: 2, image: "pic-2.jpg" },
    { id: 3, image: "pic-3.jpg" },
    { id: 4, image: "pic-4.jpg" },
  ];
  return (
    <div className="my-24 px-4 md:px-0 bg-gray-200 py-10">
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StaffSliderBox {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
