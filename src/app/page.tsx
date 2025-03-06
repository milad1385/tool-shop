import Banner from "@/components/templates/Home/Banner";
import BestSeller from "@/components/templates/Home/BestSeller";
import Categories from "@/components/templates/Home/Categories";
import NewestProduct from "@/components/templates/Home/NewestProduct";
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
      <Banner src="pic.jpg" />
      <NewestProduct/>
    </div>
  );
}

export default page;
