import Categories from "@/components/templates/Home/Categories";
import Slider from "@/components/templates/Home/Slider";
import React from "react";

function page() {
  return (
    <div className="container">
      <Slider />
      <Categories />
    </div>
  );
}

export default page;
