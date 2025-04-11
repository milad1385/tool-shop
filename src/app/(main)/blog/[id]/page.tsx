import Breadcrumb from "@/components/modules/Breadcrumb";
import ArticleTitle from "@/components/templates/articles/ArticleTitle";
import React from "react";
import { FaClock } from "react-icons/fa";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

function page() {
  return (
    <div className="container mt-24 md:mt-48">
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/blog", name: "مقاله ها" },
          { id: 3, href: "/blog/1", name: "مقاله راجع فلان" },
        ]}
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9 bg-white p-4 rounded-3xl leading-8">
          <ArticleTitle/>
        </div>
        <div className="col-span-3 bg-white rounded-2xl"></div>
      </div>
    </div>
  );
}

export default page;
