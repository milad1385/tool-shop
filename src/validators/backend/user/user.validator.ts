import { z } from "zod";

export const registerSchema = z.object({
  fullname: z
    .string()
    .min(3, "نام کامل حداقل ۳ کاراکتر باید باشد")
    .max(50, "نام کامل حداکثر ۵۰ کاراکتر باید باشد"),
  username: z
    .string()
    .min(3, "نام کاربری حداقل ۳ کاراکتر باید باشد")
    .max(50, "نام کاربری حداکثر ۵۰ کاراکتر باید باشد"),
  phone: z
    .string()
    .regex(/^09[0-9]{9}$/, "شماره تلفن باید با ۰۹ شروع شود و ۱۱ رقم باشد"),
  email: z.string().email("ایمیل معتبر نیست"),
  password: z.string().min(8, "رمز عبور حداقل ۸ کاراکتر باید باشد"),
});
export const loginSchema = z.object({
  identifier: z.string().min(1, "فرستادن ایمیل یا نام کاربری اجباری است"),
  password: z.string().min(8, "رمز عبور حداقل ۸ کاراکتر باید باشد"),
});

export const updateUserValidorSchema = z.object({
  name: z
    .string()
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),

  username: z
    .string()
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),

  email: z
    .string()
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .email("ایمیل معتبر نمیباشد")
    .max(100, "حداکثر تعداد کاراکتر 100 عدد میباشد"),

  phone: z
    .string()
    .min(11, "حداقل تعداد کاراکتر 11 عدد است")
    .max(11, "حداکثر تعداد کاراکتر 11 عدد میباشد")
    .regex(/^[0-9]+$/, "شماره تلفن باید فقط شامل اعداد باشد"),

  image: z.any(),
});

export type UpdateUserType = z.infer<typeof updateUserValidorSchema>;

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
