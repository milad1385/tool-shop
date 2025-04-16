import React from "react";
import ArticleCategory from "./ArticleCategory";

function ArticleCategories() {
  return (
    <div className="bg-white p-4 rounded-3xl mb-4 leading-8">
      <div className="border-r-4 bg-slate-100 border-yellow-400 mb-4 rounded-xl p-4">
        <h3 className="font-Lalezar text-xl text-slate-800 ">دسته بندی ها</h3>
      </div>
      <ul className="space-y-3">
        <ArticleCategory
          title="دسته بندی 1"
          subCategories={[
            { id: 1, title: "زیر دسته بندی 1" },
            { id: 2, title: "زیر دسته بندی 2" },
            { id: 3, title: "زیر دسته بندی 3" },
          ]}
        />
       
        <ArticleCategory
          title="دسته بندی 2"
          subCategories={[
            { id: 1, title: "زیر دسته بندی 1" },
            { id: 2, title: "زیر دسته بندی 2" },
            { id: 3, title: "زیر دسته بندی 3" },
          ]}
        />
         <ArticleCategory
          title="دسته بندی 3"
          subCategories={[]}
        />
      </ul>
    </div>
  );
}

export default ArticleCategories;
