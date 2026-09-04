import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/data";
import * as yup from "yup";

export const createProductSchema = yup.object({
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(5, "حداقل تعداد عنوان 5 کاراکتر است")
    .max(200, "حداکثر تعداد عنوان 200 کاراکتر میباشد"),

  slug: yup.string().required("این فیلد الزامی است"),

  category: yup.string().required("این فیلد الزامی است"),

  description: yup
    .string()
    .required("این فیلد الزامی است")
    .min(50, "حداقل تعداد توضیحات 50 کاراکتر است")
    .max(2000, "حداکثر تعداد توضیحات 2000 کاراکتر میباشد"),

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
          ACCEPTED_IMAGE_TYPES.includes(file.type),
        );
      },
    ),
  features: yup.array().of(
    yup.object({
      name: yup
        .string()
        .required("نام ویژگی الزامی است")
        .min(2, "نام ویژگی حداقل ۲ کاراکتر باید باشد")
        .max(100, "نام ویژگی حداکثر ۱۰۰ کاراکتر باید باشد"),
      value: yup
        .string()
        .required("مقدار ویژگی الزامی است")
        .min(1, "مقدار ویژگی حداقل ۱ کاراکتر باید باشد")
        .max(200, "مقدار ویژگی حداکثر ۲۰۰ کاراکتر باید باشد"),
    }),
  ),
  customFeatures: yup.array().of(
    yup.object({
      name: yup
        .string()
        .required("نام ویژگی سفارشی الزامی است")
        .min(2, "نام ویژگی سفارشی حداقل ۲ کاراکتر باید باشد")
        .max(100, "نام ویژگی سفارشی حداکثر ۱۰۰ کاراکتر باید باشد"),
      value: yup
        .string()
        .required("مقدار ویژگی سفارشی الزامی است")
        .min(1, "مقدار ویژگی سفارشی حداقل ۱ کاراکتر باید باشد")
        .max(200, "مقدار ویژگی سفارشی حداکثر ۲۰۰ کاراکتر باید باشد"),
    }),
  ),
  sellers: yup.array().of(
    yup.object({
      name: yup
        .string()
        .required("فروشنده الزامی است")
        .min(2, "فروشنده الزامی است"),
      stock: yup
        .number()
        .required("موجودی الزامی است")
        .positive("موجودی باید عدد مثبت باشد")
        .integer("قیمت باید عدد صحیح باشد")
        .min(1, "موجودی حداقل 1 است.")
        .max(10000000000, "مقدار موجودی حداکثر 10000000000 باید باشد"),
      price: yup
        .number()
        .positive("قیمت باید عدد مثبت باشد")
        .integer("قیمت باید عدد صحیح باشد")
        .required("قیمت الزامی است")
        .min(1, "قیمت حداقل ۱ است")
        .max(10000000000, "مقدار قیمت حداکثر 10000000000 باید باشد"),
      discount: yup
        .number()
        .nullable()
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
