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

export const sellerInformation = yup.object({
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
  email: yup
    .string()
    .email("ایمیل معتبر نمیباشد")
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  phone: yup
    .string()
    .required("این فیلد الزامی است")
    .min(11, "حداقل تعداد کاراکتر 11 عدد است")
    .max(11, "حداکثر تعداد کاراکتر 11 عدد میباشد"),
  storeName: yup
    .string()
    .required("این فیلد الزامی است")
    .min(5, "حداقل تعداد کاراکتر 5 عدد است")
    .max(150, "حداکثر تعداد کاراکتر 150 عدد میباشد"),
  nationalCode: yup
    .string()
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(10, "حداکثر تعداد کاراکتر 10 عدد میباشد"),
  gender: yup.string().required("این فیلد الزامی است"),
  companyCode: yup
    .string()
    .optional()
    .min(11, "حداقل 11 کاراکتر وارد کنید")
    .max(11, "حداکثر 11 کاراکتر وارد کنید"),
});

export type SellerInformationType = yup.InferType<typeof sellerInformation>;

export const sellerAddressInfo = yup.object({
  address: yup
    .string()
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(1000, "حداکثر تعداد کاراکتر 1000 عدد میباشد"),
  postalCode: yup
    .string()
    .required("این فیلد الزامی است")
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(10, "حداکثر تعداد کاراکتر 10 عدد میباشد"),
  desc: yup
    .string()
    .required("این فیلد الزامی است")
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(1000, "حداکثر تعداد کاراکتر 1000 عدد میباشد"),
});
export const userAddress = yup.object({
  address: yup
    .string()
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(1000, "حداکثر تعداد کاراکتر 1000 عدد میباشد"),
  postalCode: yup
    .string()
    .required("این فیلد الزامی است")
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(10, "حداکثر تعداد کاراکتر 10 عدد میباشد"),
  unit: yup
    .string()
    .required("این فیلد الزامی است")
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(5, "حداکثر تعداد کاراکتر 5 عدد میباشد"),
  pelak: yup
    .string()
    .required("این فیلد الزامی است")
    .required("این فیلد الزامی است")
    .min(3, "حداقل تعداد کاراکتر 3 عدد است")
    .max(3, "حداکثر تعداد کاراکتر 3 عدد میباشد"),
});

export type sellerAddressInfoType = yup.InferType<typeof sellerAddressInfo>;
export type UserAddressType = yup.InferType<typeof userAddress>;
