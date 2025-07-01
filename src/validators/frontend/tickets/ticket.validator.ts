import * as yup from "yup";

export const sendAnswerToTicketSchema = yup.object({
  content: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(10000, "حداکثر تعداد کاراکتر 10000 عدد میباشد"),
});

export type AnswerTicketType = yup.InferType<typeof sendAnswerToTicketSchema>;

export const newTicketSchema = yup.object({
  priority: yup.string().required("این فیلد الزامی است").oneOf(["1", "2", "3"] , "اولویت باید بین اعداد 1 و 2 و 3 باشد"),
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(1, "حداقل تعداد کاراکتر 1 عدد است")
    .max(10000, "حداکثر تعداد کاراکتر 10000 عدد میباشد"),
  body: yup
    .string()
    .required("این فیلد الزامی است")
    .min(10, "حداقل تعداد کاراکتر 10 عدد است")
    .max(10000, "حداکثر تعداد کاراکتر 10000 عدد میباشد"),
  department: yup.string().required("این فیلد الزامی است"),
});

export type newTicketType = yup.InferType<typeof newTicketSchema>;
