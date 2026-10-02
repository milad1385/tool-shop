import { z } from "zod";

export const sendContact = z.object({
  email: z
    .string()
    .min(1, "این فیلد الزامی است")
    .email("ایمیل معتبر نمیباشد")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  fullname: z
    .string()
    .min(1, "این فیلد الزامی است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),
  message: z
    .string()
    .min(1, "این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(1000, "حداکثر تعداد کاراکتر 1000 عدد میباشد"),
});

export type sendContactType = z.infer<typeof sendContact>;

export const sendAnswerSchema = z.object({
  message: z
    .string()
    .min(1, "متن پاسخ نمی‌تواند خالی باشد")
    .min(10, "متن پاسخ باید حداقل ۱۰ کاراکتر باشد")
    .max(1000, "متن پاسخ نمی‌تواند بیشتر از ۱۰۰۰ کاراکتر باشد"),
});

export type SendAnswerFormValues = z.infer<typeof sendAnswerSchema>;
