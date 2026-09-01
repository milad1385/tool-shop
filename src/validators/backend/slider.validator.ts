import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
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

export const sliderSchema = z.object({
  title: z
    .string({ message: "وارد کردن عنوان اسلایدر الزامی است" })
    .min(1, "وارد کردن عنوان الزامی است"),
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
  href: z
    .string({ message: "وارد کردن لینک اسلایدر اجباری است" })
    .min(1, "وارد کردن لینک اسلایدر اجباری است")
    .min(3, "حداقل تعداد لینک اسلایدر 3 کاراکتر است")
    .max(100, "حداکثر تعداد لینک اسلایدر 100 کاراکتر میباشد"),
  priority: z.coerce
    .number({ message: "وارد کردن اولویت اجباری است" })
    .min(1, "اولویت باید حداقل ۱ باشد")
    .max(3, "اولویت باید حداکثر ۳ باشد")
    .default(3),
});

export const updateSliderSchema = z.object({
  title: z
    .string()
    .min(1, "وارد کردن عنوان الزامی است")
    .min(3, "عنوان حداقل ۳ کاراکتر باید باشد")
    .max(100, "عنوان حداکثر ۱۰۰ کاراکتر باید باشد"),
  href: z
    .string()
    .min(1, "وارد کردن لینک الزامی است")
    .min(3, "لینک حداقل ۳ کاراکتر باید باشد")
    .max(100, "لینک حداکثر ۱۰۰ کاراکتر باید باشد"),
  priority: z
    .number()
    .min(1, "اولویت باید حداقل ۱ باشد")
    .max(3, "اولویت باید حداکثر ۳ باشد")
    .default(3),
  image: z
    .any()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;
        if (value instanceof File) return value.size > 0;
        if (value instanceof FileList) return value.length > 0;
        if (Array.isArray(value)) return value.length > 0;
        return false;
      },
      "فایل انتخاب شده معتبر نیست"
    )
    .refine(
      (value) => {
        if (!value) return true;
        const file = value instanceof File ? value : value[0];
        if (!file) return true;
        return file.size <= MAX_FILE_SIZE;
      },
      "حداکثر حجم فایل 5MB است"
    )
    .refine(
      (value) => {
        if (!value) return true;
        const file = value instanceof File ? value : value[0];
        if (!file) return true;
        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      },
      "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند"
    ),
});

export type TSliderSchema = z.infer<typeof sliderSchema>;
export type TUpdateSliderSchema = z.infer<typeof updateSliderSchema>;
