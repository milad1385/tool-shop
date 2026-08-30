import React from "react";
import Slider from "./Slider";
import { getAllSliders } from "@/services/sliders.service";

async function HeaderSlider() {
  const sliders = await getAllSliders();
  return <Slider sliders={sliders} />;
}

export default HeaderSlider;
