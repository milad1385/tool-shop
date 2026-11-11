import { z } from "zod";

export const sendComment = z.object({
  comment: z
    .string()
    .min(1, "این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(1000, "حداکثر تعداد کاراکتر 1000 عدد میباشد"),
});

export type TSendComment = z.infer<typeof sendComment>;
