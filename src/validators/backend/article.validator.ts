import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
import { z } from "zod";

const getFileFromValue = (value: any): File | null => {
  if (!value) return null;

  if (value instanceof File) {
    return value;
  }

  if (value instanceof FileList && value.length > 0) {
    return value[0];
  }

  if (Array.isArray(value) && value.length > 0) {
    return value[0];
  }

  return null;
};

export const articleSchema = z.object({
  title: z
    .string()
    .min(3, "عنوان باید حداقل ۳ کاراکتر باشد")
    .max(200, "عنوان نباید بیشتر از ۲۰۰ کاراکتر باشد"),

  link: z
    .string()
    .min(1, "لینک الزامی است")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "لینک باید فقط شامل حروف کوچک انگلیسی، اعداد و خط تیره باشد",
    ),

  tags: z
    .string()
    .min(1, "تگ‌ها الزامی هستند")
    .regex(/^[^,]+(,[^,]+)*$/, "تگ‌ها باید با کاما جدا شوند"),

  readingTime: z
    .string()
    .min(1, "مدت زمان خواندن الزامی است")
    .regex(/^\d+\s*دقیقه$/, "مدت زمان باید به صورت عدد + دقیقه باشد"),

  shortDescription: z
    .string()
    .min(1, "توضیحات کوتاه الزامی است")
    .max(200, "توضیحات کوتاه نباید بیشتر از ۲۰۰ کاراکتر باشد"),

  category: z.string().min(1, "انتخاب دسته‌بندی الزامی است"),

  image: z
    .any()
    .refine(
      (value) => {
        const file = getFileFromValue(value);
        return file !== null && file.size > 0;
      },
      { message: "آپلود عکس الزامی است" },
    )
    .refine(
      (value) => {
        const file = getFileFromValue(value);
        if (!file) return false;
        return file.size <= MAX_FILE_SIZE;
      },
      { message: "حداکثر حجم فایل 5MB است" },
    )
    .refine(
      (value) => {
        const file = getFileFromValue(value);
        if (!file) return false;
        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      },
      { message: "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند" },
    ),
});

export type ArticleFormValues = z.infer<typeof articleSchema>;
