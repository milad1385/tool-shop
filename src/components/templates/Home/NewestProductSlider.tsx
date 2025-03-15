"use client";
import ProductBox from "@/components/modules/ProductBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

function NewestProductSlider() {
  const products = [
    {
      id: 1,
      title: "دریل بتن کن میلی متری",
      link: "",
      image: "product-1.jpg",
      price: 12000000,
      discount: 30,
    },
    {
      id: 2,
      title: "دریل شارژی مدل دیوالت",
      link: "",
      image: "product-6.jpg",
      price: 2000000,
      discount: 30,
    },
    {
      id: 3,
      title: "دستگاه مدل Henzax",
      link: "",
      image: "product-7.jpg",
      price: 10000000,
      discount: 30,
    },
    {
      id: 4,
      title: "دستگاه جوشکاری",
      link: "",
      image: "product-8.jpg",
      price: 6000000,
      discount: 30,
    },
    {
      id: 5,
      title: "دریل شارژی مدل دیوالت",
      link: "",
      image: "product-6.jpg",
      price: 2000000,
      discount: 30,
    },
  ];
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
