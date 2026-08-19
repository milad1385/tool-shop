import { z } from "zod";

export const registerSchema = z.object({
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

export type RegisterInput = z.infer<typeof registerSchema>;