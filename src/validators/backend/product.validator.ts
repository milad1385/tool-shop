import { z } from "zod";

const featureSchema = z.object({
  name: z.string().optional(),
  value: z.string().optional(),
});

const sellerSchema = z.object({
  seller: z.string().optional(),
  price: z.number().min(0, "قیمت نمیتواند منفی باشد").optional(),
  discount: z.number().min(0).max(100).default(0).optional(),
  stock: z.number().min(0).default(1).optional(),
});

const filterValueSchema = z.object({
  key: z.string().min(1, "کلید فیلتر الزامی است"),
  value: z.union([z.string(), z.array(z.string())]),
});

const customFilterSchema = z.object({
  key: z.string().min(1, "کلید ویژگی سفارشی الزامی است"),
  value: z.string().min(1, "مقدار ویژگی سفارشی الزامی است"),
});

export const createProductSchema = z.object({
  title: z.string().min(1, "نام محصول الزامی است"),
  slug: z
    .string()
    .min(1, "لینک محصول الزامی است")
    .regex(/^[a-z0-9\-]+$/, "لینک فقط شامل حروف کوچک، اعداد و خط تیره باشد"),
  category: z.string().min(1, "دسته بندی الزامی است"),
  description: z.string().optional(),
  images: z
    .any()
    .refine(
      (value) => {
        if (!value) return false;
        if (value instanceof FileList) return value.length > 0;
        if (Array.isArray(value)) return value.length > 0;
        return false;
      },
      { message: "حداقل یک تصویر الزامی است" },
    )
    .optional(),
  features: z.array(featureSchema).optional().default([]),
  customFeatures: z.array(featureSchema).optional().default([]),
  sellers: z.array(sellerSchema).optional().default([]),
  filterValues: z.array(filterValueSchema).optional().default([]),
  customFilters: z.array(customFilterSchema).optional().default([]),
  shortIdentifier: z.string().optional(),
  status: z.enum(["active", "inactive", "draft"]).default("draft"),
});

export type TProductSchema = z.infer<typeof createProductSchema>;
