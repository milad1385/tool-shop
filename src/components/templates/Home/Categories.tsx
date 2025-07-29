import React from "react";
import CategoriesSlider from "./CategoriesSlider";
import Title from "@/components/modules/main/Title";

function Categories() {
  return (
    <section className="py-10 relative">
      <Title title="دسته بندی محصولات" />
      <CategoriesSlider />
      <div className="hidden lg:block absolute  top-40 left-0 -z-50 w-[0.01px] h-[0.01px] bg-[#ece169] rounded-full shadow-[0px_0px_190px_150px_#ece169]"></div>
      <div className="hidden lg:block absolute  top-96 right-0 -z-50 w-[0.01px] h-[0.01px] bg-[#ece169] rounded-full shadow-[0px_0px_190px_150px_#ece169]"></div>
    </section>
  );
}

export default Categories;
