import connectToDB from "@/configs/db";
import Category from "@/models/Category";
import { normalizeData } from "@/utils/helper";

export const getAllCategories = async () => {
  try {
    await connectToDB();
    const categories = await Category.find({}).populate("parent");
    return normalizeData(categories);
  } catch (error) {
    throw new Error(error.message);
  }
};
