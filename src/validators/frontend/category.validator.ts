import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
import * as yup from "yup";

export const createCategorySchema = yup.object({
  name: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد نام دسته بندی 3 کاراکتر عدد است")
    .max(100, "حداکثر تعداد نام دسته بندی 100 کاراکتر عدد میباشد"),
  href: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد لینک دسته بندی کاراکتر 3 عدد است")
    .max(100, "حداکثر تعداد لینک دسته بندی  100 کاراکتر عدد میباشد"),

  desc: yup
    .string()
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد توضیحات دسته بندی کاراکتر 10 عدد است")
    .max(1000, "حداکثر تعداد توضیحات دسته بندی  1000 کاراکتر عدد میباشد"),

  category: yup.string().optional(),
  tags: yup
    .string()
    .required("وارد کردن حداقل یک تگ الزامی است")
    .test("is-splittable", "حداقل یک تگ وارد کن", (value) => {
      const tagsArray = value.split(" , ").map((tag) => tag.trim());
      return tagsArray.length > 0 && tagsArray[0] !== "";
    }),
  image: yup
    .mixed()
    .test(
      "required",
      "آپلود عکس الزامی است",
      (value: any) => value && value.length > 0
    )
    .test(
      "fileSize",
      `حداکثر حجم فایل 5MB است`,
      (value: any) =>
        value && value.length > 0 && value[0].size <= MAX_FILE_SIZE
    )
    .test(
      "fileType",
      "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند",
      (value: any) =>
        value &&
        value.length > 0 &&
        ACCEPTED_IMAGE_TYPES.includes(value[0].type)
    ),
});

export type TCategorySchema = yup.InferType<typeof createCategorySchema>;
