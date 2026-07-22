import * as yup from "yup";

export const sendContact = yup.object({
  email: yup
    .string()
    .email("ایمیل معتبر نمیباشد")
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  username: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  message: yup
    .string()
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(1000, "حداکثر تعداد کاراکتر 1000 عدد میباشد"),
});
export type sendContactType = yup.InferType<typeof sendContact>;
