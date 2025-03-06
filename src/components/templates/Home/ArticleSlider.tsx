"use client";
import ArticleBox from "@/components/modules/ArticleBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function ArticleSlider() {
  const articles = [
    { id: 1, title: "راهنمای خرید انواع مته", link: "", image: "blog-1.jpg" },
    { id: 2, title: "تعمیر قلاب ماهیگیری", link: "", image: "blog-2.jpg" },
    { id: 3, title: "تمیز کردن لوازم کارگاهی", link: "", image: "blog-3.jpg" },
    { id: 4, title: "راهنمای خرید انواع مته", link: "", image: "blog-1.jpg" },
  ];
  return (
    <Swiper slidesPerView={3} spaceBetween={15}>
      {articles.map((article) => (
        <SwiperSlide key={article.id}>
          <ArticleBox {...article} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ArticleSlider;
