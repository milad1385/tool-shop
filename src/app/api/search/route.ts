import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import Article from "@/models/Article";
import { normalizeData } from "@/utils/helper";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get("q")?.trim() ?? "";

    if (search.length < 3) {
      return NextResponse.json(
        {
          success: true,
          data: { products: [], articles: [] },
        },
        { status: 200 },
      );
    }

    await connectToDB();

    const words = search.split(/\s+/).filter(Boolean);

    const buildFilter = (fields: string[]) => {
      const filter: any = {};

      if (words.length > 0) {
        filter.$and = words.map((word) => {
          const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

          return {
            $or: fields.map((field) => ({
              [field]: { $regex: escapedWord, $options: "i" },
            })),
          };
        });
      }

      return filter;
    };

    // جستجوی دقیق فقط در نام و برند محصول
    const productFilter = buildFilter(["name", "brand"]);

    // جستجوی مقاله در عنوان و توضیح کوتاه
    const articleFilter = {
      ...buildFilter(["title", "shortDescription"]),
      status: "published",
    };

    const [products, articles] = await Promise.all([
      Product.find(productFilter).populate("sellers", "price stock").lean(),
      Article.find(articleFilter)
        .populate("author", "fullname image username")
        .populate("category", "name href")
        .select(
          "title shortDescription image link readingTime createdAt category author",
        )
        .lean(),
    ]);

    return NextResponse.json(
      {
        success: true,
        data: {
          products: normalizeData(products),
          articles: normalizeData(articles),
        },
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "خطا در جستجو",
      },
      { status: 500 },
    );
  }
}