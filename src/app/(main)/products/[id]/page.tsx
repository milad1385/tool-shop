import Breadcrumb from "@/components/modules/Breadcrumb";
import Title from "@/components/modules/Title";
import ProductDetails from "@/components/templates/Product/ProductDetails";
import ProductSlider from "@/components/templates/Product/ProductSlider";
import ProductTabs from "@/components/templates/Product/ProductTabs";
import SameProductSlider from "@/components/templates/Product/SameProductSlider";
import { IPage } from "@/libs/types";
import React from "react";

async function page({ params }: IPage) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="container mt-24 md:mt-48">
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
      <div className="mt-16 mb-10 bg-[#eab308] rounded-2xl p-8 shadow">
        <Title title="محصولات مرتبط" />
        <SameProductSlider />
      </div>
    </div>
  );
}

export default page;
