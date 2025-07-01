"use client";
import ProductBox from "@/components/modules/main/ProductBox";
import "swiper/css";

import { products } from "@/constants/data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SalesProductSlider() {

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
