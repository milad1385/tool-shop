import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import { normalizeData } from "@/utils/helper";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get("q")?.trim() ?? "";

    if (search.length < 3) {
      return NextResponse.json(
        {
          success: true,
          data: [],
        },
        { status: 200 },
      );
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

    return NextResponse.json(
      {
        success: true,
        data: normalizeData(products),
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "خطا در جستجوی محصولات",
      },
      { status: 500 },
    );
  }
}
