"use client";
import CategoryBox from "@/components/modules/CategoryBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Categories() {
  return (
    <section className="py-10">
      <h2 className="font-Lalezar text-center text-3xl text-gray-800">
        دسته بندی محصولات
      </h2>
      <div>
        <Swiper slidesPerView={6} spaceBetween={10} className="mt-10">
          <SwiperSlide>
            <CategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryBox />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Categories;
