"use client";
import Input from "@/components/ui/Input";
import {
    ISellerAuth,
    sellerAuthSchema,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function AuthForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(sellerAuthSchema),
  });

  const handleAuthSeller = (data: ISellerAuth) => {};
  return (
    <form className="mt-6" onSubmit={handleSubmit(handleAuthSeller)}>
      <Input
        register={register}
        errors={errors}
        name="identifier"
        type="text"
        label="شماره موبایل یا ایمیل"
        className="bg-gray-50"
        disable={false}
        labelClassName="!text-sm lg:!text-base font-Iran mt-5"
      />

      <button className="bg-yellow-500 w-full py-3 rounded-lg mt-44 lg:mt-20 font-bold text-white">
        تایید
      </button>
    </form>
  );
}

export default AuthForm;
