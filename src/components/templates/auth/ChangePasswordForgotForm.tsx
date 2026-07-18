"use client"
import Input from "@/components/ui/Input";
import {
    changePassword,
    changePasswordType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function ChangePasswordForgotForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(changePassword),
  });

  const changePasswordHandler = async (data: changePasswordType) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(changePasswordHandler)}
      className="flex flex-col gap-y-5 mt-8"
    >
      <Input
        register={register}
        errors={errors}
        name="password"
        type="text"
        label="رمز عبور جدید"
        className="bg-gray-50"
        disable={false}
        labelClassName="md:!text-lg font-Iran"
      />
      <Input
        register={register}
        errors={errors}
        name="confirmPassword"
        type="text"
        label="تایید رمز عبور"
        className="bg-gray-50"
        disable={false}
        labelClassName="md:!text-lg font-Iran"
      />
      <button className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4">
        تایید کردن
      </button>
    </form>
  );
}

export default ChangePasswordForgotForm;
