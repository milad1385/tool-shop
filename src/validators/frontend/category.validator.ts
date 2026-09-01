import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
import * as yup from "yup";

export const createCategorySchema = yup.object({
  name: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد نام دسته بندی 3 کاراکتر است")
    .max(100, "حداکثر تعداد نام دسته بندی 100 کاراکتر میباشد"),

  href: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد لینک دسته بندی 3 کاراکتر است")
    .max(100, "حداکثر تعداد لینک دسته بندی 100 کاراکتر میباشد"),

  desc: yup
    .string()
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد توضیحات دسته بندی 10 کاراکتر است")
    .max(1000, "حداکثر تعداد توضیحات دسته بندی 1000 کاراکتر میباشد"),

  category: yup.string().optional(),

  tags: yup
    .string()
    .required("وارد کردن حداقل یک تگ الزامی است")
    .test("is-splittable", "حداقل یک تگ معتبر وارد کنید", (value) => {
      if (!value) return false;

      const tagsArray = value
        .split(/[،,]+/)
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");
      return tagsArray.length > 0;
    }),

  image: yup
    .mixed()
    .test("required", "آپلود عکس الزامی است", (value) => {
      if (!value) return false;
      if (value instanceof FileList) return value.length > 0;
      if (Array.isArray(value)) return value.length > 0;
      return false;
    })
    .test("fileSize", "حداکثر حجم فایل 5MB است", (value) => {
      if (!value) return false;
      const file = value instanceof FileList ? value[0] : value[0];
      if (!file) return false;
      return file.size <= MAX_FILE_SIZE;
    })
    .test(
      "fileType",
      "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند",
      (value) => {
        if (!value) return false;
        const file = value instanceof FileList ? value[0] : value[0];
        if (!file) return false;
        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      },
    ),

  filters: yup.array().of(
    yup.object({
      name: yup
        .string()
        .required("نام فیلتر الزامی است")
        .min(2, "نام فیلتر حداقل ۲ کاراکتر باید باشد")
        .max(100, "نام فیلتر حداکثر ۱۰۰ کاراکتر باید باشد"),
      slug: yup
        .string()
        .required("مقدار اسلاگ فیلتر الزامی است")
        .min(1, "مقدار اسلاگ فیلتر حداقل ۱ کاراکتر باید باشد")
        .max(200, "مقدار اسلاگ فیلتر حداکثر ۲۰۰ کاراکتر باید باشد"),
      type: yup
        .string()
        .oneOf(
          ["selectbox", "radio", "checkbox"],
          "نوع فیلتر باید بین selectbox , radio , checkbox باشد",
        )
        .required("نوع فیلتر الزامی است"),

      options: yup
        .string()
        .required("مقدار فیلتر الزامی است")
        .min(1, "مقدار فیلتر حداقل ۱ کاراکتر باید باشد")
        .max(200, "مقدار فیلتر حداکثر ۲۰۰ کاراکتر باید باشد"),
    }),
  ),
});

export type TCategorySchema = yup.InferType<typeof createCategorySchema>;
