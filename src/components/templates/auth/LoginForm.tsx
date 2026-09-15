"use client";
import Input from "@/components/ui/Input";
import {
  userLogin,
  userLoginType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import GoogleButton from "./GoogleButton";

function LoginForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(userLogin),
  });

  const loginUserHandler = async (data: userLoginType) => {
    setIsPending(true);

    try {
      const result = await signIn("credentials", {
        identifier: data.identifier,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("ایمیل یا رمز عبور اشتباه است");
        return;
      }

      toast.success("ورود با موفقیت انجام شد");
      reset();
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("خطا در ارتباط با سرور");
    } finally {
      setIsPending(false);
    }
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
        className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full mt-4 mb-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 h-[48px]"
      >
        {isPending ? <FaSpinner className="animate-spin h-5 w-5" /> : "ورود"}
      </button>

      <GoogleButton text="ورود با گوگل" />
    </form>
  );
}

export default LoginForm;
