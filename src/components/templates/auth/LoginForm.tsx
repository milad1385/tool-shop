"use client";
import Input from "@/components/ui/Input";
import { loginUser as loginAction } from "@/libs/actions/auth.actions";
import { useAuthStore } from "@/stores/auth.store";
import {
  userLogin,
  userLoginType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { setUser } = useAuthStore();

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
      <div className="bg-gray-200  py-2.5 rounded-md cursor-pointer">
        <div className="flex items-center gap-x-2 justify-center">
          <span className="text-sm">ورود با گوگل</span>
          <FcGoogle
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="text-[28px] cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
