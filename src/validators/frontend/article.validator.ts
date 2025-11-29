import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
import * as yup from "yup";

export const articleSchema = yup.object().shape({
  title: yup
    .string()
    .required("عنوان الزامی است")
    .min(3, "عنوان باید حداقل ۳ کاراکتر باشد"),

  link: yup.string().required("لینک الزامی است"),

  tags: yup
    .string()
    .required("تگ ها الزامی هستند")
    .matches(/^[^,]+(,[^,]+)*$/, "تگ‌ها باید با کاما جدا شوند"),

  readingTime: yup
    .string()
    .required("مدت زمان خواندن الزامی است")
    .matches(/^\d+\s*دقیقه$/, "مدت زمان باید به صورت عدد + دقیقه باشد"),

  shortDescription: yup
    .string()
    .required("توضیحات کوتاه الزامی است")
    .max(200, "توضیحات کوتاه نباید بیشتر از ۲۰۰ کاراکتر باشد"),

  category: yup.string().required("انتخاب دسته بندی الزامی است"),

  image: yup
    .mixed()
    .test("required", "آپلود عکس الزامی است", (value) => {
      if (!value || !(value instanceof FileList || Array.isArray(value)))
        return false;
      return value.length > 0;
    })
    .test("fileSize", "حداکثر حجم فایل 5MB است", (value) => {
      if (!value || !(value instanceof FileList || Array.isArray(value)))
        return false;
      return value[0]?.size <= MAX_FILE_SIZE;
    })
    .test(
      "fileType",
      "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند",
      (value) => {
        if (!value || !(value instanceof FileList || Array.isArray(value)))
          return false;
        return ACCEPTED_IMAGE_TYPES.includes(value[0]?.type);
      }
    ),
});

export type TArticleValidator = yup.InferType<typeof articleSchema>;
