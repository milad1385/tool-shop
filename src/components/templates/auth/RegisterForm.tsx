// app/auth/register/page.tsx
"use client";

import Input from "@/components/ui/Input";
import {
  registerUser,
  registerUserType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerUser as registerAction } from "@/libs/actions/auth.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(registerUser),
  });

  const handleRegisterUser = async (data: registerUserType) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("password", data.password);

      const result = await registerAction(formData);

      if (result.success) {
        reset();
        router.push("/");
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("خطا در ارتباط با سرور");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-6 md:p-4 lg:p-14 lg:pb-0">
      <h2 className="text-center text-2xl lg:text-4xl font-Lalezar">
        صفحه ثبت نام
      </h2>

      <form
        onSubmit={handleSubmit(handleRegisterUser)}
        className="flex flex-col gap-y-5 mt-3"
      >
        <Input
          register={register}
          errors={errors}
          name="username"
          type="text"
          label="نام کاربری"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="email"
          type="text"
          label="ایمیل"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="phone"
          type="text"
          label="شماره همراه"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="password"
          type="password"
          label="رمز عبور"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="font-Iran"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin h-5 w-5" />
            </>
          ) : (
            "ثبت نام"
          )}
        </button>
      </form>

      <Link
        href="/auth/login"
        className="text-center mx-auto block text-sm mt-2 mb-4 hover:text-stone-600 transition-colors"
      >
        قبلا ثبت نام کرده اید؟ وارد شوید
      </Link>
    </div>
  );
}

export default RegisterForm;
