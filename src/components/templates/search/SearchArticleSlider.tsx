"use client"
import ArticleBox from "@/components/modules/main/ArticleBox";
import { articles } from "@/constants/data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SearchArticleSlider() {
  return (
    <div className="my-5">
      <h2 className="font-Lalezar text-xl md:text-2xl lg:text-3xl mb-6">
        <span className="text-yellow-500">مقالات</span> پیدا شده
      </h2>
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
          <SwiperSlide key={article.id}>
            <ArticleBox {...article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SearchArticleSlider;
