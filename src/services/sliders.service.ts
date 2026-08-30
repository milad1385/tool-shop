import connectToDB from "@/configs/db";
import { ISlider } from "@/libs/types";
import Slider from "@/models/Slider";
import { normalizeData } from "@/utils/helper";

export const getAllSliders = async () : Promise<ISlider[]> => {
  try {
    await connectToDB();
    const sliders = await Slider.find({}).sort({ priority: 1 });
    return normalizeData(sliders);
  } catch (err) {
    throw new Error(err?.message);
  }
};
