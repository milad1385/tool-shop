import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
export const createCategorySchema = z.object({
  name: z
    .string()
    .min(3, "نام دسته بندی حداقل ۳ کاراکتر باید باشد")
    .max(100, "نام دسته بندی حداکثر ۱۰۰ کاراکتر باید باشد"),

  href: z
    .string()
    .min(3, "لینک دسته بندی حداقل ۳ کاراکتر باید باشد")
    .max(100, "لینک دسته بندی حداکثر ۱۰۰ کاراکتر باید باشد")
    .regex(/^[A-Za-z0-9-]+$/, "لینک فقط شامل حروف کوچک، اعداد و خط تیره باشد"),

  desc: z
    .string()
    .min(10, "توضیحات حداقل ۱۰ کاراکتر باید باشد")
    .max(1000, "توضیحات حداکثر ۱۰۰۰ کاراکتر باید باشد"),

  category: z.string().optional(),

  tags: z.string().min(1, "وارد کردن حداقل یک تگ الزامی است"),

  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "آپلود عکس الزامی است")
    .refine((file) => file.size <= MAX_FILE_SIZE, "حداکثر حجم فایل 5MB است")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند",
    ),

  filters: z.string().optional(),
});

export const updateCategorySchema = z.object({
  name: z
    .string()
    .min(3, "نام دسته بندی حداقل ۳ کاراکتر باید باشد")
    .max(100, "نام دسته بندی حداکثر ۱۰۰ کاراکتر باید باشد"),

  href: z
    .string()
    .min(3, "لینک دسته بندی حداقل ۳ کاراکتر باید باشد")
    .max(100, "لینک دسته بندی حداکثر ۱۰۰ کاراکتر باید باشد")
    .regex(/^[A-Za-z0-9-]+$/, "لینک فقط شامل حروف کوچک، اعداد و خط تیره باشد"),

  desc: z
    .string()
    .min(10, "توضیحات حداقل ۱۰ کاراکتر باید باشد")
    .max(1000, "توضیحات حداکثر ۱۰۰۰ کاراکتر باید باشد"),

  category: z.string().optional(),

  tags: z.string().min(1, "وارد کردن حداقل یک تگ الزامی است"),

  image: z.any(),
});

export type TCategorySchema = z.infer<typeof createCategorySchema>;
export type TUpdateCategorySchema = z.infer<typeof updateCategorySchema>;
