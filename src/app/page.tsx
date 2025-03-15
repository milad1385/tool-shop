import AdsSection from "@/components/templates/Home/AdsSection";
import Articles from "@/components/templates/Home/Articles";
import Banner from "@/components/templates/Home/Banner";
import BestSeller from "@/components/templates/Home/BestSeller";
import Categories from "@/components/templates/Home/Categories";
import NewestProduct from "@/components/templates/Home/NewestProduct";
import SalesProducts from "@/components/templates/Home/SalesProducts";
import Slider from "@/components/templates/Home/Slider";
import SuggestedProduct from "@/components/templates/Home/SuggestedProduct";
import React from "react";

function page() {
  return (
    <div className="container py-20">
      <Slider />
      <Categories />
      <SalesProducts />
      <BestSeller />
      <Banner src="pic.jpg" />
      <NewestProduct />
      <AdsSection />
      <SuggestedProduct />
      <Articles />
    </div>
  );
}

export default page;
