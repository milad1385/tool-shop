"use client";
import Input from "@/components/ui/Input";
import {
  forgotUserPassword,
  forgotUserPasswordType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function ForgotForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(forgotUserPassword),
  });

  const sendChangePasswordRequest = (data: forgotUserPasswordType) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(sendChangePasswordRequest)}
      className="flex flex-col gap-y-5 mt-8"
    >
      <Input
        register={register}
        errors={errors}
        name="email"
        type="text"
        label="ایمیل ثبت نام شده"
        className="bg-gray-50"
        disable={false}
        labelClassName="md:!text-lg font-Iran"
      />
      <button className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4">
        ارسال درخواست
      </button>
    </form>
  );
}

export default ForgotForm;
