import connectToDB from "@/configs/db";
import Product from "@/models/Product";
import { normalizeData } from "@/utils/helper";
import { createPagination } from "@/utils/helper";
import {
  IFilterProduct,
  IGetProducts,
  IGetProductsByCategory,
  IGetProductsWithFilter,
  IPaginatedResponse,
  IProduct,
} from "@/libs/types";
import Category from "@/models/Category";

export const getProducts = async ({
  page = 1,
  limit = 10,
  search = "",
  status = "ALL",
}: IGetProducts = {}): Promise<IPaginatedResponse<IProduct>> => {
  try {
    await connectToDB();

    let filters: any = {};

    if (search) {
      filters.$or = [
        { name: { $regex: search, $options: "i" } },
        { slug: { $regex: search, $options: "i" } },
        { shortIdentifier: { $regex: search, $options: "i" } },
      ];
    }

    if (status !== "ALL") {
      filters.status = status;
    }

    const count = await Product.countDocuments(filters);

    const products = await Product.find(filters)
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({
        createdAt: -1,
      });

    return {
      data: normalizeData(products),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAmazingOffers = async (
  limit: number = 12,
): Promise<IProduct[]> => {
  try {
    await connectToDB();
    const products = await Product.find({
      isAmazingOffer: true,
      status: "active",
    })
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return normalizeData(products) as IProduct[];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getFeaturedProducts = async (
  limit: number = 10,
): Promise<IProduct[]> => {
  try {
    await connectToDB();
    const products = await Product.find({
      isFeatured: true,
      status: "active",
    })
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return normalizeData(products) as IProduct[];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllProducts = async (
  limit: number = 10,
): Promise<IProduct[]> => {
  try {
    await connectToDB();
    const products = await Product.find({
      status: "active",
    })
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return normalizeData(products) as IProduct[];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductsByCategory = async ({
  page,
  limit,
  search = "",
  categorySlug,
}: IGetProductsByCategory): Promise<IPaginatedResponse<IProduct>> => {
  try {
    await connectToDB();

    const category = await Category.findOne({ href: categorySlug });
    if (!category) {
      return {
        data: [],
        pagination: null,
      };
    }
    let filters: any = {
      category: category._id,
    };

    if (search) {
      filters.$or = [
        { name: { $regex: search, $options: "i" } },
        { slug: { $regex: search, $options: "i" } },
        { shortIdentifier: { $regex: search, $options: "i" } },
      ];
    }

    const count = await Product.countDocuments(filters);

    const products = await Product.find(filters)
      .populate("category", "name href")
      .populate("sellers.seller", "name city")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({
        createdAt: -1,
      });

    return {
      data: normalizeData(products),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProduct = async (slug: string): Promise<IProduct> => {
  try {
    await connectToDB();
    const product = await Product.findOne({
      status: "active",
      slug,
    })
      .populate("category", "name href")
      .populate("sellers.seller")
      .lean();

    return normalizeData(product);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getRelatedProducts = async (slug: string): Promise<IProduct[]> => {
  try {
    await connectToDB();
    const product = await Product.findOne({
      status: "active",
      slug,
    });

    const relatedProducts = await Product.find({
      _id: { $ne: product._id },
      category: product.category,
    })
      .populate("category", "name slug")
      .populate("sellers.seller")
      .lean();

    return normalizeData(relatedProducts);
  } catch (error) {
    throw new Error(error.message);
  }
};

const buildPriceMatchStage = (minPrice: number, maxPrice: number) => {
  return {
    $match: {
      $expr: {
        $anyElementTrue: {
          $map: {
            input: "$sellers",
            as: "seller",
            in: {
              $and: [
                {
                  $gte: [
                    {
                      $multiply: [
                        "$$seller.price",
                        {
                          $subtract: [
                            1,
                            {
                              $divide: [
                                { $ifNull: ["$$seller.discount", 0] },
                                100,
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    minPrice,
                  ],
                },
                {
                  $lte: [
                    {
                      $multiply: [
                        "$$seller.price",
                        {
                          $subtract: [
                            1,
                            {
                              $divide: [
                                { $ifNull: ["$$seller.discount", 0] },
                                100,
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    maxPrice,
                  ],
                },
              ],
            },
          },
        },
      },
    },
  };
};

export const getProductsWithFilter = async ({
  limit = 9,
  page = 1,
  categorySlugs,
  brandSlugs,
  min,
  max,
}: IGetProductsWithFilter) => {
  try {
    await connectToDB();

    const safePage = Number(page) || 1;
    const safeLimit = Number(limit) || 9;
    const skip = (safePage - 1) * safeLimit;

    const filter: any = { status: "active" };

    if (categorySlugs?.trim()) {
      const slugsArray = categorySlugs
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      if (slugsArray.length > 0) {
        const categories = await Category.find({
          href: { $in: slugsArray },
        })
          .select("_id")
          .lean();

        if (categories.length === 0) {
          return {
            data: [],
            pagination: createPagination({
              page: safePage,
              limit: safeLimit,
              count: 0,
            }),
          };
        }

        filter.category = {
          $in: categories.map((c) => c._id),
        };
      }
    }

    if (brandSlugs?.trim()) {
      const slugsArray = brandSlugs
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      filter.brand = {
        $in: slugsArray,
      };
    }

    const hasPriceFilter =
      (min !== undefined && min !== "") || (max !== undefined && max !== "");

    if (hasPriceFilter) {
      const minPrice = min !== undefined && min !== "" ? Number(min) : 0;

      const maxPrice =
        max !== undefined && max !== "" ? Number(max) : 999_999_999_999;

      const priceMatch = buildPriceMatchStage(minPrice, maxPrice);

      const countResult = await Product.aggregate([
        { $match: filter },
        priceMatch,
        { $count: "total" },
      ]);

      const count = countResult[0]?.total || 0;

      const products = await Product.aggregate([
        { $match: filter },
        priceMatch,
        { $sort: { createdAt: -1 } },
        { $skip: skip },
        { $limit: safeLimit },
      ]);

      const populatedProducts = await Product.populate(products, [
        {
          path: "category",
          select: "name slug",
        },
        {
          path: "sellers.seller",
          select: "name city",
        },
      ]);

      return {
        data: normalizeData(populatedProducts),
        pagination: createPagination({
          page: safePage,
          limit: safeLimit,
          count,
        }),
      };
    }

    const count = await Product.countDocuments(filter);

    const products = await Product.find(filter)
      .populate("category", "name slug")
      .populate("sellers.seller", "name city")
      .skip(skip)
      .limit(safeLimit)
      .sort({ createdAt: -1 })
      .lean();

    return {
      data: normalizeData(products),
      pagination: createPagination({
        page: safePage,
        limit: safeLimit,
        count,
      }),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};