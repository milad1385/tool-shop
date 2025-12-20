"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";
import SellerComment from "./SellerComment";

export default function SellersCommentList() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper seller-comment-slider !hidden lg:!block"
      >
        <SwiperSlide>
          <SellerComment />
        </SwiperSlide>
        <SwiperSlide>
          <SellerComment />
        </SwiperSlide>
        <SwiperSlide>
          <SellerComment />
        </SwiperSlide>
        <SwiperSlide>
          <SellerComment />
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper seller-comment-slider !block lg:!hidden"
      >
        <SwiperSlide>
          <SellerComment />
        </SwiperSlide>
        <SwiperSlide>
          <SellerComment />
        </SwiperSlide>
        <SwiperSlide>
          <SellerComment />
        </SwiperSlide>
        <SwiperSlide>
          <SellerComment />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
