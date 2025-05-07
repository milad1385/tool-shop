"use client";
import React from "react";
import CategoryBox from "@/components/modules/main/CategoryBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function CategoriesSlider() {
  const categories = [
    {
      id: 1,
      title: "سنگ فرز",
      image: "ca-1.png",
      link: "",
    },
    {
      id: 2,
      title: "دریل شارژی",
      image: "ca-2.png",
      link: "",
    },
    {
      id: 3,
      title: "اره ساده",
      image: "ca-3.png",
      link: "",
    },
    {
      id: 4,
      title: "اره چکشی",
      image: "ca-4.png",
      link: "",
    },
    {
      id: 5,
      title: "پیچ گوشتی",
      image: "ca-5.png",
      link: "",
    },
    {
      id: 6,
      title: "اره دم روباهی",
      image: "ca-6.png",
      link: "",
    },
    {
      id: 7,
      title: "چکش",
      image: "ca-7.png",
      link: "",
    },
  ];

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
