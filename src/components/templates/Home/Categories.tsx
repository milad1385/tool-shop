"use client";
import CategoryBox from "@/components/modules/CategoryBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Categories() {
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
    <section className="py-10">
      <h2 className="font-Lalezar text-center text-3xl text-gray-800">
        دسته بندی محصولات
      </h2>
      <div>
        <Swiper slidesPerView={6} spaceBetween={10} className="mt-10">
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryBox {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Categories;
