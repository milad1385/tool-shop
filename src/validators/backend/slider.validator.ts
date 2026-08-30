import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";

export const sliderSchema = z.object({
  title: z.string().min(1, "وارد کردن عنوان الزامی است"),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "آپلود عکس الزامی است")
    .refine((file) => file.size <= MAX_FILE_SIZE, "حداکثر حجم فایل 5MB است")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند",
    ),
  href: z
    .string()
    .min(1, "این فیلد الزامی است")
    .min(3, "حداقل تعداد لینک اسلایدر 3 کاراکتر است")
    .max(100, "حداکثر تعداد لینک اسلایدر 100 کاراکتر میباشد"),
  priority: z.number().min(1, "وارد کردن اولویت اسلایدر الزامی است"),
});

export type TSliderSchema = z.infer<typeof sliderSchema>;
