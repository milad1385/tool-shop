import connectToDB from "@/configs/db";
import {
    IGetSliders,
    IPaginatedResponse,
    ISlider
} from "@/libs/types";
import Slider from "@/models/Slider";
import { createPagination, normalizeData } from "@/utils/helper";

export const getAllSliders = async (): Promise<ISlider[]> => {
  try {
    await connectToDB();
    const sliders = await Slider.find({}).sort({ priority: 1 });
    return normalizeData(sliders);
  } catch (err) {
    throw new Error(err?.message);
  }
};

export const getSliders = async ({
  page = 1,
  limit = 10,
  search = "",
}: IGetSliders = {}): Promise<IPaginatedResponse<ISlider>> => {
  try {
    await connectToDB();
    let filters: any = {};

    const count = await Slider.countDocuments({});

    if (search) {
      filters.title = { $regex: search };
    }
    const sliders = await Slider.find(filters)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    return {
      data: normalizeData(sliders),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
