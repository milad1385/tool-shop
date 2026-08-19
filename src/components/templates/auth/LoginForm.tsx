"use client";
import Input from "@/components/ui/Input";
import {
  userLogin,
  userLoginType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { loginUser as loginAction } from "@/libs/actions/auth.actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useTransition } from "react";

function LoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(userLogin),
  });

  const loginUserHandler = (data: userLoginType) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("identifier", data.identifier);
        formData.append("password", data.password);

        const result = await loginAction(formData);

        if (result.success) {
          reset();
          router.push("/");
          toast.success(result.message);
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
      onSubmit={handleSubmit(loginUserHandler)}
      className="flex flex-col gap-y-5 mt-8"
    >
      <Input
        register={register}
        errors={errors}
        name="identifier"
        type="text"
        label="نام کاربری یا ایمیل"
        className="bg-gray-50"
        disable={isPending}
        labelClassName="font-Iran"
      />

      <Input
        register={register}
        errors={errors}
        name="password"
        type="password"
        label="رمز عبور"
        className="bg-gray-50"
        disable={isPending}
        labelClassName="font-Iran"
      />

      <button
        type="submit"
        disabled={isPending}
        className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 h-[48px]"
      >
        {isPending ? <FaSpinner className="animate-spin h-5 w-5" /> : "ورود"}
      </button>
    </form>
  );
}

export default LoginForm;
