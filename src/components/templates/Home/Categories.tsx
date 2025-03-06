import React from "react";
import CategoriesSlider from "./CategoriesSlider";
import Title from "@/components/modules/Title";

function Categories() {
  return (
    <section className="py-10">
      <Title title="دسته بندی محصولات" />
      <CategoriesSlider />
    </section>
  );
}

export default Categories;
