import * as yup from "yup";

export const userValidorSchema = yup.object({
  name: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  lastname: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  username: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  email: yup
    .string()
    .email("ایمیل معتبر نمیباشد")
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  lastpassword: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  newpassword: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  site: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  phone: yup
    .string()
    .required("این فیلد الزامی است")
    .min(11, "حداقل تعداد کاراکتر 11 عدد است")
    .max(11, "حداکثر تعداد کاراکتر 11 عدد میباشد"),
  image: yup.mixed().required("انتخاب تصویر ضروری است"),
});

export const sellerAuthSchema = yup.object({
  identifier: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 5 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
});
export type ISellerAuth = yup.InferType<typeof sellerAuthSchema>;

export type UserData = yup.InferType<typeof userValidorSchema>;
