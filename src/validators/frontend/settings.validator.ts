import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
import * as yup from "yup";

export const sliderSchema = yup.object({
  title: yup.string().required("وارد کردن عنوان الزامی است"),
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
      return value?.[0]?.size <= MAX_FILE_SIZE;
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
  href: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد لینک اسلایدر کاراکتر 3 عدد است")
    .max(100, "حداکثر تعداد لینک اسلایدر 100 کاراکتر عدد میباشد"),
  order: yup.string().required("وارد کردن اولویت اسلایدر الزامی است"),
});

export type TSliderSchema = yup.InferType<typeof sliderSchema>;
