import Breadcrumb from "@/components/modules/Breadcrumb";
import { IPage } from "@/libs/types";
import React from "react";

async function page({ params }: IPage) {
  const { id } = await params;
  return (
    <div className="container">
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/products/1", name: "جزییات محصول دریل" },
        ]}
      />
    </div>
  );
}

export default page;
