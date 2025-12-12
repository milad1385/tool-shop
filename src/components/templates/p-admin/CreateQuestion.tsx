"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  questionSchema,
  TquestionSchema,
} from "@/validators/frontend/question.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function CreateQuestion() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(questionSchema),
  });

  const createProductFeature = (data: TquestionSchema) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(createProductFeature)} className="section-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="question"
          type="text"
          label="سوال"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="answer"
          type="text"
          label="جواب"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="order"
          type="number"
          label="اولویت"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <Button type="submit" className="!w-[200px] mt-10">
          ایجاد سوال
        </Button>
        <Button
          onClick={() => reset()}
          type="reset"
          className="!w-[200px] mt-10 !bg-red-500"
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateQuestion;
