"use client";
import React, { useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import Image from "next/image";

function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | SwiperClass>(null);
  return (
    <div className="col-span-12 md:col-span-4">
      <Swiper
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="mySwiper2 border border-gray-200 rounded-2xl select-none"
      >
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-1.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-2.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-3.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-4.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-6.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-7.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-8.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-1.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-2.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-3.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-4.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-6.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-7.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src="/images/product-8.jpg"
            alt="product-1.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductSlider;
