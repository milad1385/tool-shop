import connectToDB from "@/configs/db";
import { IGetSliders, IPaginatedResponse, ISlider } from "@/libs/types";
import Slider from "@/models/Slider";
import { createPagination, normalizeData } from "@/utils/helper";

export const getAllSliders = async (): Promise<ISlider[]> => {
  try {
    await connectToDB();
    const sliders = await Slider.find({ status: "ACCEPT" }).sort({
      priority: 1,
    });
    return normalizeData(sliders);
  } catch (err) {
    throw new Error(err?.message);
  }
};

export const getOneSlider = async (id: string): Promise<ISlider> => {
  try {
    await connectToDB();
    const slider = await Slider.findOne({ _id: id });
    return normalizeData(slider);
  } catch (err) {
    throw new Error(err?.message);
  }
};

export const getSliders = async ({
  page = 1,
  limit = 10,
  search = "",
  status = "ALL",
}: IGetSliders = {}): Promise<IPaginatedResponse<ISlider>> => {
  try {
    await connectToDB();
    let filters: any = {};

    if (search) {
      filters.title = { $regex: search };
    }

    if (status !== "ALL") {
      filters.status = status;
    }

    const count = await Slider.countDocuments(filters);

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
