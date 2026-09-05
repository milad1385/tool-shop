// app/actions/product.actions.ts
"use server";

import connectDB from "@/configs/db";
import Product from "@/models/Product";
import { uploadFile } from "@/utils/uploads";
import { createProductSchema } from "@/validators/backend/product.validator";
import { revalidatePath } from "next/cache";
import { checkAdminAccess } from "./admin.actions";
import mongoose from "mongoose";

export type ProductState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  data?: any;
};

export async function createProduct(formData: FormData): Promise<ProductState> {
  try {
    const adminCheck = await checkAdminAccess();
    if (!adminCheck.success) {
      return {
        success: false,
        message: adminCheck.message,
      };
    }

    await connectDB();

    const rawData = {
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      sellers: formData.get("sellers") as string,
      features: formData.get("features") as string,
      customFeatures: formData.get("customFeatures") as string,
    };

    let sellersData = [];
    let featuresData = [];
    let customFeaturesData = [];

    try {
      sellersData = rawData.sellers ? JSON.parse(rawData.sellers) : [];
      featuresData = rawData.features ? JSON.parse(rawData.features) : [];
      customFeaturesData = rawData.customFeatures
        ? JSON.parse(rawData.customFeatures)
        : [];
    } catch (error) {
      return {
        success: false,
        message: "فرمت داده‌ها معتبر نیست",
      };
    }

    const filteredSellers = sellersData.filter(
      (seller: any) => seller.seller && (seller.price > 0 || seller.stock > 0),
    );

    if (filteredSellers.length === 0) {
      return {
        success: false,
        message: "حداقل یک فروشنده معتبر وارد کنید",
        errors: {
          sellers: "حداقل یک فروشنده معتبر وارد کنید",
        },
      };
    }

    const imageFiles = formData.getAll("imageFiles") as File[];
    const uploadedImages: string[] = [];

    if (imageFiles && imageFiles.length > 0) {
      for (const file of imageFiles) {
        if (file.size > 0) {
          const uploadResult = await uploadFile(file, "uploads/products");
          if (uploadResult.success && uploadResult.url) {
            uploadedImages.push(uploadResult.url);
          }
        }
      }
    }

    if (uploadedImages.length === 0) {
      return {
        success: false,
        message: "حداقل یک تصویر باید آپلود شود",
        errors: {
          images: "حداقل یک تصویر باید آپلود شود",
        },
      };
    }

    const productData = {
      name: rawData.name,
      slug: rawData.slug,
      category: rawData.category,
      description: rawData.description,
      images: uploadedImages,
      sellers: filteredSellers.map((seller: any) => ({
        seller: seller.seller,
        price: Number(seller.price) || 0,
        stock: Number(seller.stock) || 0,
        discount: Number(seller.discount) || 0,
      })),
      features: featuresData.filter(
        (f: any) => f.name?.trim() && f.value?.trim() && f.slug?.trim(),
      ),
      customFeatures: customFeaturesData.filter(
        (f: any) => f.name?.trim() && f.value?.trim() && f.slug?.trim(),
      ),
      shortIdentifier: `PROD-${Date.now()}`,
      status: "draft",
    };

    const validationResult = createProductSchema.safeParse(productData);

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        const path = err.path.join(".");
        errors[path] = err.message;
      });
      return {
        success: false,
        message: "اطلاعات وارد شده معتبر نیست",
        errors,
      };
    }

    const validatedData = validationResult.data;

    const product = await Product.create({
      name: validatedData.name,
      slug: validatedData.slug,
      category: new mongoose.Types.ObjectId(validatedData.category),
      description: validatedData.description,
      images: validatedData.images,
      sellers: validatedData.sellers,
      features: validatedData.features || [],
      customFeatures: validatedData.customFeatures || [],
      shortIdentifier: validatedData.shortIdentifier,
      status: validatedData.status,
    });

    revalidatePath("/p-admin/products");
    revalidatePath("/products");

    return {
      success: true,
      message: `محصول با موفقیت ایجاد شد`,
      data: JSON.parse(JSON.stringify(product)),
    };
  } catch (error: any) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      const fieldNames: { [key: string]: string } = {
        slug: "لینک",
        shortIdentifier: "شناسه کوتاه",
      };
      return {
        success: false,
        message: `${fieldNames[field] || field} قبلاً ثبت شده است`,
        errors: {
          [field]: `${fieldNames[field] || field} قبلاً ثبت شده است`,
        },
      };
    }

    return {
      success: false,
      message: error.message || "خطا در ایجاد محصول",
    };
  }
}
