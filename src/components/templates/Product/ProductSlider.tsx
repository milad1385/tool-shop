"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductActions from "./ProductActions";
import { IProductSlider } from "@/libs/types";

function ProductSlider({ images }: IProductSlider) {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | SwiperClass>(null);
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="flex gap-x-2">
        <ProductActions />
        <Swiper
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          className="mySwiper2 border border-gray-200 rounded-2xl select-none"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image}>
              <Image width={1920} height={1080} src={image} alt={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4">
        <Swiper
          onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="ThumbSwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide>
              <Image width={1920} height={1080} src={image} alt={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
