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

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
