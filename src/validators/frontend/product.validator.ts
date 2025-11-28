import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
import * as yup from "yup";

export const createProductSchema = yup.object({
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(5, "حداقل تعداد عنوان 5 کاراکتر عدد است")
    .max(200, "حداکثر تعداد عنوان 200 کاراکتر عدد میباشد"),
  slug: yup.string().required("این فیلد الزامی است"),

  category: yup.string().required("این فیلد الزامی است"),
  description: yup
    .string()
    .required("این فیلد الزامی است")
    .min(50, "حداقل تعداد عنوان 50 کاراکتر عدد است")
    .max(2000, "حداکثر تعداد عنوان 2000 کاراکتر عدد میباشد"),
  images: yup
    .mixed()
    .test("required", "آپلود حداقل یک عکس الزامی است", (value) => {
      if (!value || !(value instanceof FileList || Array.isArray(value)))
        return false;
      return value.length > 0;
    })
    .test("fileSize", "حداکثر حجم فایل 5MB است", (value) => {
      if (!value || !(value instanceof FileList || Array.isArray(value)))
        return true;
      const filesArray = Array.from(value);
      return filesArray.every((file) => file.size <= MAX_FILE_SIZE);
    })
    .test(
      "fileType",
      "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند",
      (value) => {
        if (!value || !(value instanceof FileList || Array.isArray(value)))
          return true;
        const filesArray = Array.from(value);
        return filesArray.every((file) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type)
        );
      }
    ),
});

export const productDetailSchema = yup.object({
  price: yup
    .number()
    .required("وارد کردن این فیلد الزامی است")
    .positive("قیمت نمی‌تواند منفی باشد")
    .min(1000, "قیمت باید بیشتر از 1000 تومن باشد"),
  discount: yup
    .number()
    .required("وارد کردن درصد تخفیف الزامی است")
    .min(0, "درصد تخفیف نمی‌تواند کمتر از ۰ باشد")
    .max(100, "درصد تخفیف نمی‌تواند بیشتر از ۱۰۰ باشد")
    .typeError("درصد تخفیف باید عدد باشد"),

  color: yup.string().required("وارد کردن این فیلد الزامی است"),
  colorLabel: yup
    .string()
    .required("وارد کردن این فیلد الزامی است")
    .min(2, "حداقل دو کاراکتر وارد کنید")
    .max(100, "حداکثر 100 کاراکتر وارد کنید"),
  stock: yup
    .number()
    .required("وارد کردن این فیلد الزامی است")
    .positive("تعداد نمی‌تواند منفی باشد"),

  product: yup.string().required("باید یک محصول را انتخاب کنید"),
});

export const productFeatureSchema = yup.object({
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(5, "حداقل تعداد عنوان 5 کاراکتر عدد است")
    .max(200, "حداکثر تعداد عنوان 200 کاراکتر عدد میباشد"),
  value: yup
    .string()
    .required("این فیلد الزامی است")
    .min(5, "حداقل تعداد مقدار ویژگی 5 کاراکتر عدد است")
    .max(200, "حداکثر تعداد مقدار ویژگی 200 کاراکتر عدد میباشد"),
  product: yup.string().required("باید یک محصول را انتخاب کنید"),
  slug: yup.string().required("این فیلد الزامی است"),
});

export type TProductSchema = yup.InferType<typeof createProductSchema>;
export type TProductDetailSchema = yup.InferType<typeof productDetailSchema>;
export type TProductFeatureSchema = yup.InferType<typeof productFeatureSchema>;
