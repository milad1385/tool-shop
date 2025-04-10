import Breadcrumb from "@/components/modules/Breadcrumb";
import Articles from "@/components/templates/articles/Articles";
import React, { Suspense } from "react";

function page() {
  return (
    <div className="container mt-24 md:mt-48">
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/articles", name: "مقاله ها" },
        ]}
      />
      <Articles />
    </div>
  );
}

export default page;
