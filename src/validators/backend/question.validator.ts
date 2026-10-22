import { z } from "zod";

export const questionSchema = z.object({
  question: z.string().min(1, "وارد کردن صورت سوال الزامی است").trim(),
  answer: z.string().min(1, "وارد کردن جواب سوال الزامی است").trim(),
  order: z.coerce
    .number({ message: "شماره اولویت را وارد کنید" })
    .min(1, "شماره اولویت باید بزرگتر از صفر باشد"),
});

export type TCreateQuestionSchema = z.infer<typeof questionSchema>;
