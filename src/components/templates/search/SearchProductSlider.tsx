"use client";
import ProductBox from "@/components/modules/main/ProductBox";
import { products } from "@/constants/data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SearchProductSlider() {
  return (
    <div>
      <h2 className="font-Lalezar text-xl md:text-2xl lg:text-3xl mb-6">
        <span className="text-yellow-500">محصولات</span> پیدا شده
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
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

export default SearchProductSlider;
