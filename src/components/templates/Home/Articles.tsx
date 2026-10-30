import Title from "@/components/modules/main/Title";
import React from "react";
import ArticleSlider from "./ArticleSlider";
import { getArticles } from "@/services/article.service";

async function Articles() {
  const articles = await getArticles();
  return (
    <div className="my-10">
      <Title title="خواندنی های جدید" />
      <ArticleSlider articles={articles} />
    </div>
  );
}

export default Articles;
