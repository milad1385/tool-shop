import * as yup from "yup";

export const questionSchema = yup.object({
  question: yup
    .string()
    .required("وارد کردن سوال الزامی است")
    .min(10, "حداقل 10 کاراکتر باید وارد کنید")
    .max(250, "حداکثر 250 کاراکتر باید وارد کنید"),
  answer: yup
    .string()
    .required("وارد کردن جواب الزامی است")
    .min(10, "حداقل 10 جواب باید وارد کنید")
    .max(500, "حداکثر 500 جواب باید وارد کنید"),
  order: yup.string().required("وارد کردن اولویت الزامی است"),
});

export type TquestionSchema = yup.InferType<typeof questionSchema>;
