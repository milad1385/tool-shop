"use client";
import ArticleBox from "@/components/modules/main/ArticleBox";
import { IArticleSlider } from "@/libs/types";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ArticleSlider({ articles }: IArticleSlider) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={15}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1 },
        500: { slidesPerView: 2 },
        900: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {articles.map((article) => (
        <SwiperSlide key={article._id}>
          <ArticleBox {...article} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ArticleSlider;
