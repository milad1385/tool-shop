"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

function Slider() {
  const images = [
    { id: 1, url: "/images/slider-1.jpg", alt: "image1" },
    { id: 2, url: "/images/slider-2.jpg", alt: "image2" },
  ];
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper mt-10"
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <Image
            className="rounded-xl"
            width={1920}
            height={1080}
            src={image.url}
            alt={image.url}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
