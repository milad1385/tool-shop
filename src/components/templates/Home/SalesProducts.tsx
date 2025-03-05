"use client";
import ProductBox from "@/components/modules/ProductBox";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function SalesProducts() {
  return (
    <div className="my-10 bg-[#eab308] rounded-lg px-5 py-8">
      <h3 className="text-3xl text-center font-Lalezar mb-10">
        پیشنهاد شگفت انگیز
      </h3>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <Swiper slidesPerView={3} spaceBetween={10}>
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
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}

export default SalesProducts;
