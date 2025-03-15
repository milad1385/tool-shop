"use client";
import BestSellerBox from "@/components/modules/BestSellerBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

function BestSellerSlider() {
  const products = [
    {
      id: 1,
      title: "دریل بتن کن میلی متری",
      link: "",
      image: "product-1.jpg",
      price: 12000000,
      discount: 30,
      quantity: 8,
    },
    {
      id: 2,
      title: "دریل شارژی مدل دیوالت",
      link: "",
      image: "product-6.jpg",
      price: 2000000,
      discount: 30,
      quantity: 7,
    },
    {
      id: 3,
      title: "دستگاه مدل Henzax",
      link: "",
      image: "product-7.jpg",
      price: 10000000,
      discount: 30,
      quantity: 5,
    },
    {
      id: 4,
      title: "دستگاه جوشکاری",
      link: "",
      image: "product-8.jpg",
      price: 6000000,
      discount: 30,
      quantity: 6,
    },
  ];
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={15}
      autoplay={{
        delay: 2000,
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
