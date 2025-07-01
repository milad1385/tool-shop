"use client";
import React from "react";
import CategoryBox from "@/components/modules/main/CategoryBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { categories } from "@/constants/data";

function CategoriesSlider() {
  return (
    <Swiper
      slidesPerView={6}
      breakpoints={{
        300: { slidesPerView: 2 },
        500: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
      }}
      spaceBetween={15}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mt-10"
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <CategoryBox {...category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategoriesSlider;
