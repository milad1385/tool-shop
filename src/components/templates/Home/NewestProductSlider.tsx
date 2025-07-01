"use client";
import ProductBox from "@/components/modules/main/ProductBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { products } from "@/constants/data";

function NewestProductSlider() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={15}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1 },
        500: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductBox {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NewestProductSlider;
