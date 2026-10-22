"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  questionSchema,
  TCreateQuestionSchema,
} from "@/validators/backend/question.validator";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { createQuestion } from "@/libs/actions/question.action";

function CreateQuestion() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<TCreateQuestionSchema>({
    resolver: zodResolver(questionSchema),
  });

  const createQuestionHandler = async (data: TCreateQuestionSchema) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("question", data.question);
      formData.append("answer", data.answer);
      formData.append("order", String(data.order));

      const result = await createQuestion(formData);

      if (result.success) {
        toast.success(result.message);
        reset();
        router.push("/p-admin/questions");
      } else if (result.errors) {
        Object.entries(result.errors).forEach(([field, message]) => {
          setError(field as any, {
            type: "server",
            message,
          });
        });
        toast.error("اطلاعات وارد شده معتبر نیست");
      } else if (result.message) {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("خطا:", error);
      toast.error("خطا در ارتباط با سرور");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createQuestionHandler)}
      className="md:section-box"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="question"
          type="text"
          label="سوال"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="md:!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="answer"
          type="text"
          label="جواب"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="md:!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="order"
          type="number"
          label="اولویت"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="md:!text-lg font-Iran"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <Button
          type="submit"
          className="!w-[200px] h-[48px] mt-10 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            "ایجاد سوال"
          )}
        </Button>
        <Button
          onClick={() => reset()}
          type="reset"
          className="!w-[200px] mt-10 !bg-red-500"
          disabled={isLoading}
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateQuestion;