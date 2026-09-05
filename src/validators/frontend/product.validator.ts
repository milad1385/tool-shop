import * as yup from "yup";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";

export const createProductSchema = yup.object({
  name: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد نام 3 کاراکتر است")
    .max(200, "حداکثر تعداد نام 200 کاراکتر میباشد"),

  slug: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "لینک حداقل 3 کاراکتر باید باشد")
    .max(200, "لینک حداکثر 200 کاراکتر باید باشد")
    .matches(/^[a-z0-9\-]+$/, "لینک فقط شامل حروف کوچک، اعداد و خط تیره باشد"),

  category: yup.string().required("انتخاب دسته بندی الزامی است"),

  description: yup
    .string()
    .required("توضیحات الزامی است")
    .min(10, "توضیحات حداقل 10 کاراکتر باید باشد")
    .max(5000, "توضیحات حداکثر 5000 کاراکتر باید باشد"),

  images: yup
    .mixed()
    .test("required", "آپلود حداقل یک عکس الزامی است", (value) => {
      if (!value) return false;
      if (value instanceof FileList) return value.length > 0;
      if (Array.isArray(value)) return value.length > 0;
      return false;
    })
    .test("fileSize", "حداکثر حجم هر فایل 5MB است", (value) => {
      if (!value) return true;
      const files = value instanceof FileList ? Array.from(value) : value;
      if (!Array.isArray(files)) return true;
      return files.every((file: File) => file.size <= MAX_FILE_SIZE);
    })
    .test(
      "fileType",
      "فقط فرمت‌های .jpg, .jpeg, .png و .webp پشتیبانی می‌شوند",
      (value) => {
        if (!value) return true;
        const files = value instanceof FileList ? Array.from(value) : value;
        if (!Array.isArray(files)) return true;
        return files.every((file: File) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type),
        );
      },
    ),

  features: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required("این فیلد الزامی است"),
        value: yup.string().required("این فیلد الزامی است"),
        slug: yup.string().matches(/^[a-z0-9\-]+$/, "این فیلد الزامی است"),
      }),
    )

    .default([]),

  customFeatures: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required("این فیلد الزامی است"),
        value: yup.string().required("این فیلد الزامی است"),
        slug: yup
          .string()

          .matches(/^[a-z0-9\-]+$/, "اسلاگ را وارد کنید"),
      }),
    )

    .default([]),

  sellers: yup
    .array()
    .of(
      yup.object({
        seller: yup.string().required("فروشنده الزامی است"),
        stock: yup
          .number()
          .typeError("موجودی باید عدد باشد")
          .required("موجودی الزامی است")
          .min(0, "موجودی نمیتواند منفی باشد")
          .max(10000000000, "موجودی حداکثر 10 میلیارد است"),
        price: yup
          .number()
          .typeError("قیمت باید عدد باشد")
          .required("قیمت الزامی است")
          .min(0, "قیمت نمیتواند منفی باشد")
          .max(10000000000, "قیمت حداکثر 10 میلیارد است"),
        discount: yup
          .number()
          .typeError("تخفیف باید عدد باشد")
          .optional()
          .transform((value, originalValue) => {
            if (
              originalValue === "" ||
              originalValue === null ||
              originalValue === undefined
            ) {
              return 0;
            }
            return value;
          })
          .default(0)
          .min(0, "تخفیف حداقل 0 است")
          .max(100, "تخفیف حداکثر 100 است"),
      }),
    )
    .min(1, "حداقل یک فروشنده الزامی است"),
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
export const createRequestProductSchema = yup.object({
  product: yup
    .string()
    .required("این فیلد الزامی است")
    .min(5, "حداقل عنوان 5 کاراکتر است")
    .max(200, "حداکثر عنوان 200 کاراکتر است"),

  colors: yup
    .array()
    .of(
      yup.object({
        label: yup.string().required("نام رنگ الزامی است"),
        color: yup.string().required("کد رنگ الزامی است"),
        qty: yup
          .string()
          .required("موجودی الزامی است")
          .min(0, "موجودی نمی‌تواند منفی باشد"),
        price: yup.string().required("قیمت اجباری است"),
        discount: yup
          .string()
          .required("وارد کردن تخفیف است")
          .min(0, "تخفیف نمی تواند منفی باشد")
          .max(100, "تخفیف نمی تواند بیشتر از 100 درصد باشد."),
      }),
    )
    .required("حداقل یک رنگ باید تعریف شود")
    .min(1, "حداقل یک رنگ باید تعریف شود"),
});

export type TRequestProductSchema = yup.InferType<
  typeof createRequestProductSchema
>;

export type TProductSchema = yup.InferType<typeof createProductSchema>;
export type TProductDetailSchema = yup.InferType<typeof productDetailSchema>;
export type TProductFeatureSchema = yup.InferType<typeof productFeatureSchema>;
