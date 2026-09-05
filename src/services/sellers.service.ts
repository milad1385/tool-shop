import connectToDB from "@/configs/db";
import Seller from "@/models/Seller";
import { normalizeData } from "@/utils/helper";

export const getAllSellers = async () => {
  try {
    await connectToDB();
    const sellers = await Seller.find({}).populate(
      "user",
      "username fullname phone email",
    );

    return normalizeData(sellers);
  } catch (error) {
    throw new Error(error.message);
  }
};
