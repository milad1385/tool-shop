"use client";
import React from "react";
import ProductBox from "@/components/modules/ProductBox";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function SalesProductSlider() {
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
  ];
  return (
    <div className="col-span-9">
      <Swiper slidesPerView={3} spaceBetween={15}>
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
