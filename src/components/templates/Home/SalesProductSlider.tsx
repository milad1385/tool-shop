"use client";
import React from "react";
import ProductBox from "@/components/modules/main/ProductBox";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function SalesProductSlider() {
  const products = [
    {
      id: 1,
      title: "دریل بتن کن میلی متری",
      link: "/products/1",
      image: "product-1.jpg",
      price: 12000000,
      discount: 30,
    },
    {
      id: 2,
      title: "دریل شارژی مدل دیوالت",
      link: "/products/1",
      image: "product-6.jpg",
      price: 2000000,
      discount: 30,
    },
    {
      id: 3,
      title: "دستگاه مدل Henzax",
      link: "/products/1",
      image: "product-7.jpg",
      price: 10000000,
      discount: 30,
    },
    {
      id: 4,
      title: "دستگاه جوشکاری",
      link: "/products/1",
      image: "product-8.jpg",
      price: 6000000,
      discount: 30,
    },
  ];
  return (
    <div className="col-span-12 lg:col-span-9">
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          300: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductBox {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SalesProductSlider;
