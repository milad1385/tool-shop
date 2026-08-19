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
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useTransition } from "react";
import { useAuthStore } from "@/stores/auth.store";

function RegisterForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { setUser } = useAuthStore();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(registerUser),
  });

  const onSubmit = (data: registerUserType) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("password", data.password);

        const result = await registerAction(formData);

        if (result.success) {
          setUser(result.user || null);
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
    <div className="flex-1 p-6 md:p-4 lg:p-14 lg:pb-0">
      <h2 className="text-center text-2xl lg:text-4xl font-Lalezar">
        صفحه ثبت نام
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 mt-3"
      >
        <Input
          register={register}
          errors={errors}
          name="username"
          type="text"
          label="نام کاربری"
          className="bg-gray-50"
          disable={isPending}
          labelClassName="font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="email"
          type="text"
          label="ایمیل"
          className="bg-gray-50"
          disable={isPending}
          labelClassName="font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="phone"
          type="text"
          label="شماره همراه"
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
          {isPending ? (
            <FaSpinner className="animate-spin h-5 w-5" />
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
