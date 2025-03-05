import Categories from "@/components/templates/Home/Categories";
import SalesProducts from "@/components/templates/Home/SalesProducts";
import Slider from "@/components/templates/Home/Slider";
import React from "react";

function page() {
  return (
    <div className="container">
      <Slider />
      <Categories />
      <SalesProducts />
    </div>
  );
}

export default page;
