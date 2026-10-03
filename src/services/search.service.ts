import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import { normalizeData } from "@/utils/helper";

export const search = async (search: string) => {
  try {
    await connectToDB();
    if (search.length < 3) {
      return {
        products: [],
        articles: [],
      };
    }

    await connectToDB();

    const filter: any = {};

    const words = search.split(/\s+/).filter(Boolean);

    if (words.length > 0) {
      filter.$and = words.map((word) => {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        return {
          $or: [
            { name: { $regex: escapedWord, $options: "i" } },
            { brand: { $regex: escapedWord, $options: "i" } },
            { description: { $regex: escapedWord, $options: "i" } },
          ],
        };
      });
    }

    const products = await Product.find(filter)
      .populate("sellers", "price stock")
      .lean();

    return {
      products: normalizeData(products),
    };
  } catch (error) {
    throw new Error(error?.message);
  }
};
