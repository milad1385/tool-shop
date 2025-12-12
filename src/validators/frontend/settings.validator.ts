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
export const siteInfoSchema = yup.object({
  address: yup
    .string()
    .required("وارد کردن آدرس الزامی است")
    .min(3, "حداقل 3 کاراکتر باید وارد کنید")
    .max(2000, "حداکثر 2000 کاراکتر باید وارد کنید"),
  phone: yup
    .string()
    .required("وارد کردن شماره ثابت الزامی است")
    .min(11, "حداقل 11 کاراکتر وارد کنید")
    .max(11, "حداکثر 11 کاراکتر وارد کنید"),
  mobilePhone: yup
    .string()
    .required("وارد کردن شماره ثابت الزامی است")
    .min(11, "حداقل 11 کاراکتر وارد کنید")
    .max(11, "حداکثر 11 کاراکتر وارد کنید"),
  instagram: yup
    .string()
    .required("وارد کردن آیدی اینستاگرام الزامی است")
    .min(5, "حداقل 5 کاراکتر باید وارد کنید")
    .max(50, "حداکثر 50 کاراکتر باید وارد کنید"),
  telegram: yup
    .string()
    .required("وارد کردن آیدی تلگرام الزامی است")
    .min(5, "حداقل 5 کاراکتر باید وارد کنید")
    .max(50, "حداکثر 50 کاراکتر باید وارد کنید"),
  description: yup
    .string()
    .required("وارد کردن توضیحات فوتر الزامی است")
    .min(50, "حداقل 50 کاراکتر باید وارد کنید")
    .max(2000, "حداکثر 2000 کاراکتر باید وارد کنید"),
  email: yup
    .string()
    .email("ایمیل معتبر وارد کنید")
    .required("وارد کردن ایمیل الزامی است")
    .max(100,"حداکثر کاراکتر ایمیل 100 تا میباشد"),
});

export type TSliderSchema = yup.InferType<typeof sliderSchema>;
export type TSiteInfoSchema = yup.InferType<typeof siteInfoSchema>;
