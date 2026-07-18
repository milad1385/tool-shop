"use client";
import Input from "@/components/ui/Input";
import {
  registerUser,
  registerUserType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerUser),
  });

  const handleRegisterUser = async (data: registerUserType) => {
    console.log(data);
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
          disable={false}
          labelClassName="font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="email"
          type="text"
          label="ایمیل"
          className="bg-gray-50"
          disable={false}
          labelClassName="font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="phone"
          type="text"
          label="شماره همراه"
          className="bg-gray-50"
          disable={false}
          labelClassName="font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="password"
          type="password"
          label="رمز عبور"
          className="bg-gray-50"
          disable={false}
          labelClassName=" font-Iran"
        />
        <button className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4">
          ثبت نام
        </button>
      </form>
      <Link
        href="/auth/login"
        className="text-center mx-auto block text-sm mt-2 mb-4"
      >
        قبلا ثبت نام کرده اید؟ وارد شوید
      </Link>
    </div>
  );
}

export default RegisterForm;
