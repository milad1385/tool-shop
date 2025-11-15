import * as yup from "yup";

export const createMenuSchema = yup.object({
  name: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد نام منو 3 کاراکتر عدد است")
    .max(100, "حداکثر تعداد نام منو 100 کاراکتر عدد میباشد"),
  href: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد لینک منو کاراکتر 3 عدد است")
    .max(100, "حداکثر تعداد لینک منو  100 کاراکتر عدد میباشد"),

  desc: yup
    .string()
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد توضیحات منو کاراکتر 10 عدد است")
    .max(1000, "حداکثر تعداد توضیحات منو  1000 کاراکتر عدد میباشد"),
  menu: yup.string().optional(),
  image: yup.mixed().optional(),
});

export type TMenuSchema = yup.InferType<typeof createMenuSchema>;
