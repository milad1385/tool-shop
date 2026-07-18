"use client";
import Input from "@/components/ui/Input";
import {
  userLogin,
  userLoginType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userLogin),
  });

  const loginUserHandler = async (data: userLoginType) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(loginUserHandler)}
      className="flex flex-col gap-y-5 mt-8"
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
        name="password"
        type="password"
        label="رمز عبور"
        className="bg-gray-50"
        disable={false}
        labelClassName=" font-Iran"
      />

      <button className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4">
        ورود
      </button>
    </form>
  );
}

export default LoginForm;
