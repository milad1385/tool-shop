"use client";
import CategoryBox from "@/components/modules/main/CategoryBox";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ICategoriesSlider } from "@/libs/types";

function CategoriesSlider({ categories }: ICategoriesSlider) {
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
