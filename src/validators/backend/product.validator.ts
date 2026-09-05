import { z } from "zod";

const sellerSchema = z.object({
  seller: z.string().min(1, "فروشنده الزامی است"),
  price: z.number().min(0, "قیمت نمیتواند منفی باشد"),
  discount: z.number().min(0).max(100).default(0),
  stock: z.number().min(0).default(1),
});

const featureSchema = z.object({
  name: z.string().optional(),
  value: z.string().optional(),
  slug: z
    .string()
    .regex(/^[a-z0-9\-]+$/, "اسلاگ فقط شامل حروف کوچک، اعداد و خط تیره باشد"),
});

const customFeatureSchema = z.object({
  name: z.string().optional(),
  value: z.string().optional(),
  slug: z
    .string()

    .regex(/^[a-z0-9\-]+$/, "اسلاگ فقط شامل حروف کوچک، اعداد و خط تیره باشد"),
});

export const createProductSchema = z.object({
  name: z.string().min(1, "نام محصول الزامی است"),
  slug: z
    .string()
    .min(1, "لینک محصول الزامی است")
    .regex(/^[a-z0-9\-]+$/, "لینک فقط شامل حروف کوچک، اعداد و خط تیره باشد"),
  category: z.string().min(1, "دسته بندی الزامی است"),
  description: z.string().min(1, "توضیحات الزامی است"),
  images: z.array(z.string()).min(1, "حداقل یک تصویر الزامی است"),
  sellers: z.array(sellerSchema).min(1, "حداقل یک فروشنده الزامی است"),
  features: z.array(featureSchema).optional().default([]), // ✅ optional
  customFeatures: z.array(customFeatureSchema).optional().default([]), // ✅ optional
  shortIdentifier: z.string().min(1, "شناسه کوتاه الزامی است"),
  status: z.enum(["active", "inactive", "draft"]).default("draft"),
});

export type TCreateProductSchema = z.infer<typeof createProductSchema>;
