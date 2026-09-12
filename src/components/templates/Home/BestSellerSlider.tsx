"use client";
import BestSellerBox from "@/components/modules/main/BestSellerBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

function BestSellerSlider({ products }) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={15}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <BestSellerBox {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BestSellerSlider;
