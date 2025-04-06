"use client";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FooterSliderBox from "./FooterSliderBox";

function FooterSlider() {
  const footerSlider = [
    { id: 1, img: "/images/footer/logo-1.png" },
    { id: 2, img: "/images/footer/logo-2.png" },
    { id: 3, img: "/images/footer/logo-3.png" },
    { id: 4, img: "/images/footer/logo-4.png" },
    { id: 5, img: "/images/footer/logo-5.png" },
    { id: 6, img: "/images/footer/logo-6.png" },
  ];
  return (
    <div className="bg-[#eab308] p-5 rounded-2xl mb-10">
      <Swiper
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          300: { slidesPerView: 2 },
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        <Swiper
          slidesPerView={5}
          spaceBetween={15}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            300: { slidesPerView: 2 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {footerSlider.map((slider) => (
            <SwiperSlide key={slider.id}>
              <FooterSliderBox {...slider} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Swiper>
    </div>
  );
}

export default FooterSlider;
