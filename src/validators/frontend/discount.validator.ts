import * as yup from "yup";

export const createDiscountSchema = yup.object({
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد عنوان 3 کاراکتر عدد است")
    .max(100, "حداکثر تعداد عنوان 100 کاراکتر عدد میباشد"),

  percentage: yup
    .string()
    .required("این فیلد الزامی است")
    .test("is-valid-percentage", "فقط عددی بین 0 تا 100 وارد کنید", (value) => {
      const num = Number(value);
      return !isNaN(num) && num >= 0 && num <= 100;
    }),

  usage: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد استفاده 1 کاراکتر عدد است")
    .max(1000, "حداکثر تعداد استفاده 100 کاراکتر عدد میباشد"),
  product: yup.string().required("محصول مورد نظر را برای کد تخفیف انتخاب کنید"),
});
