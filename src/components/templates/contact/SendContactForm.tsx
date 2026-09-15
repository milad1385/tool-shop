"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { sendContactMessage } from "@/libs/actions/contact.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import {
  sendContact,
  sendContactType,
} from "@/validators/backend/conatctus.validator";
import { useRouter } from "next/navigation";

function SendContactForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<sendContactType>({
    resolver: zodResolver(sendContact),
  });

  const sendNewContact = async (data: sendContactType) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("fullname", data.fullname);
        formData.append("message", data.message);

        const result = await sendContactMessage(formData);

        if (result.success) {
          toast.success(result.message);
          router.replace("/", { scroll: true });
          reset();
        } else if (result.errors) {
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field as any, {
              type: "server",
              message,
            });
          });
          toast.error("اطلاعات وارد شده معتبر نیست");
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(sendNewContact)}
      className="flex flex-col gap-y-5 bg-white w-[100%] md:w-[420px] p-8 shadow rounded-md"
    >
      <Input
        register={register}
        errors={errors}
        name="email"
        type="text"
        label="ایمیل"
        className="bg-gray-50"
        disable={isPending}
        labelClassName="md:!text-lg font-Iran"
      />

      <Input
        register={register}
        errors={errors}
        name="fullname"
        type="text"
        label="نام و نام خانوادگی"
        className="bg-gray-50"
        disable={isPending}
        labelClassName="md:!text-lg font-Iran"
      />

      <Input
        register={register}
        errors={errors}
        name="message"
        type="textarea"
        label="متن پیغام"
        className="bg-gray-50"
        disable={isPending}
        labelClassName="md:!text-lg font-Iran"
      />

      <Button
        type="submit"
        disabled={isPending}
        className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4 flex items-center justify-center gap-2 h-[48px]"
      >
        {isPending ? <FaSpinner className="animate-spin text-xl" /> : "ارسال"}
      </Button>
    </form>
  );
}

export default SendContactForm;
