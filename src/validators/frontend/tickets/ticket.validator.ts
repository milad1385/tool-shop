import * as yup from "yup";

export const sendAnswerToTicketSchema = yup.object({
  content: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(10000, "حداکثر تعداد کاراکتر 10000 عدد میباشد"),
});

export type AnswerTicketType = yup.InferType<
  typeof sendAnswerToTicketSchema
>;
