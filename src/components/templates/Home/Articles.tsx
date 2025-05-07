import Title from "@/components/modules/main/Title";
import React from "react";
import ArticleSlider from "./ArticleSlider";

function Articles() {
  return (
    <div className="my-10">
      <Title title="خواندنی های جدید" />
      <ArticleSlider />
    </div>
  );
}

export default Articles;
