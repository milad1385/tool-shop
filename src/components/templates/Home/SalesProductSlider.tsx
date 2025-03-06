"use client";
import React from "react";
import ProductBox from "@/components/modules/ProductBox";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function SalesProductSlider() {
  return (
    <div className="col-span-9">
      <Swiper slidesPerView={3} spaceBetween={15}>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SalesProductSlider;
