import Breadcrumb from "@/components/modules/Breadcrumb";
import ProductDetails from "@/components/templates/Product/ProductDetails";
import ProductSlider from "@/components/templates/Product/ProductSlider";
import ProductTabs from "@/components/templates/Product/ProductTabs";
import { IPage } from "@/libs/types";
import React from "react";

async function page({ params }: IPage) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="container">
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/products/1", name: "جزییات محصول دریل" },
        ]}
      />
      <div className="grid grid-cols-12 bg-white p-4 rounded-2xl">
        <ProductSlider />
        <ProductDetails />
      </div>

      <ProductTabs />
    </div>
  );
}

export default page;
