import React from "react";
import ArticleCategory from "./ArticleCategory";
import ArticleSectionTitle from "./ArticleSectionTitle";

function ArticleCategories() {
  const articleCategories = [
    {
      id : 1,
      title: "دسته بندی 1",
      subCategories: [
        { id: 1, title: "زیر دسته بندی 1" },
        { id: 2, title: "زیر دسته بندی 2" },
        { id: 3, title: "زیر دسته بندی 3" },
      ],
    },
    {
      id : 2,
      title: "دسته بندی 2",
      subCategories: [
        { id: 1, title: "زیر دسته بندی 1" },
        { id: 2, title: "زیر دسته بندی 2" },
        { id: 3, title: "زیر دسته بندی 3" },
      ],
    },
    {
      id : 3,
      title: "دسته بندی 3",
      subCategories: [],
    },
  ];
  return (
    <div className="bg-white p-4 rounded-3xl mb-4 leading-8">
      <ArticleSectionTitle title="دسته بندی ها" />
      <ul className="space-y-5 md:space-y-3 px-3 md:px-0">
        {articleCategories.map((articleCategory) => (
          <ArticleCategory
            {...articleCategory}
            key={articleCategory.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ArticleCategories;
