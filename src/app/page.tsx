import BestSeller from "@/components/templates/Home/BestSeller";
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
      <BestSeller />
    </div>
  );
}

export default page;
