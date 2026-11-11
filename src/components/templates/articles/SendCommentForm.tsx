"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { createNewComment } from "@/libs/actions/articleComment.action";
import {
  sendComment,
  TSendComment,
} from "@/validators/backend/comment.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

function SendCommentForm({ link }: { link: string }) {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    setError,
  } = useForm<TSendComment>({
    resolver: zodResolver(sendComment),
  });

  const sendNewComment = (data: TSendComment) => {
    startTransition(async () => {
      const formData = new FormData();

      formData.append("comment", data.comment);
      formData.append("articleLink", link);

      try {
        const result = await createNewComment(formData);

        if (result.success) {
          toast.success(result.message);
          setValue("comment", "");
        } else if (result.errors) {
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field as any, {
              type: "server",
              message,
            });
          });
          toast.error("اطلاعات وارد شده معتبر نیست");
        } else if (!result.success && result.message) {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(sendNewComment)}>
      <Input
        register={register}
        errors={errors}
        name="comment"
        type="textarea"
        label="متن کامنت"
        className="bg-gray-50"
        disable={isPending}
        labelClassName="md:!text-lg font-Iran"
      />

      <Button
        className="!w-[150px] !h-[50px] flex-center !mt-10"
        disabled={isPending}
      >
        {isPending ? (
          <FaSpinner className="animate-spin h-5 w-5" />
        ) : (
          "ارسال کامنت"
        )}
      </Button>
    </form>
  );
}

export default SendCommentForm;
