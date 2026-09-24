"use client";
import Input from "@/components/ui/Input";
import { updateUserInfo } from "@/libs/actions/user.action";
import { useAuthStore } from "@/stores/auth.store";
import {
  UpdateUserType,
  updateUserValidorSchema,
} from "@/validators/backend/user/user.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner, FaTrashAlt } from "react-icons/fa";
import { PiUploadSimple } from "react-icons/pi";

function InformationInputs({ user }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [tempUserImage, setTempUserImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { logout } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    setError,
  } = useForm<UpdateUserType>({
    resolver: zodResolver(updateUserValidorSchema),
    defaultValues: { ...user },
  });

  const editUserInformation = async (data: UpdateUserType) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("phone", data.phone || "");

        if (imageFile) {
          formData.append("image", imageFile);
        }

        const result = await updateUserInfo(formData);

        if (result.success) {
          toast.success(result.message);
          setTempUserImage("");
          setImageFile(null);
          logout();
          router.refresh();
        } else if (result.errors) {
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field as any, {
              type: "server",
              message,
            });
          });

          toast.error("اطلاعات وارد شده معتبر نیست");
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("حجم فایل نباید بیشتر از ۵ مگابایت باشد");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("فرمت فایل معتبر نیست");
      return;
    }

    setImageFile(file);
    setTempUserImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setTempUserImage("");
    setImageFile(null);
    setValue("image", null as any);
  };

  return (
    <form onSubmit={handleSubmit(editUserInformation)}>
      <div className="my-8">
        <div className="relative w-[125px] h-[125px] mx-auto">
          <Image
            src={tempUserImage || user.image || "/images/default-avatar.png"}
            alt="avatar"
            width={1920}
            height={1080}
            className="w-full h-full rounded-full object-cover border-4 border-gray-200"
          />

          <label
            htmlFor="upload"
            className="bg-sky-500 hover:bg-sky-600 flex items-center justify-center w-[35px] h-[35px] rounded-full cursor-pointer absolute top-20 right-0 transition-colors"
          >
            <PiUploadSimple className="text-lg text-white" />
          </label>

          {imageFile && (
            <button
              type="button"
              onClick={handleRemoveImage}
              className="bg-red-500 hover:bg-red-600 text-white w-[35px] h-[35px] rounded-full absolute top-20 left-0 flex items-center justify-center transition-colors"
            >
              <FaTrashAlt size={12} />
            </button>
          )}
        </div>

        <input
          type="file"
          {...register("image", {
            onChange: handleImageChange,
          })}
          name="image"
          id="upload"
          accept="image/*"
          hidden
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          register={register}
          errors={errors}
          label="نام و نام خانوادگی"
          type="text"
          name="name"
          className="text-right"
          disable={isPending}
        />

        <Input
          register={register}
          errors={errors}
          label="نام کاربری"
          type="text"
          name="username"
          className="text-right"
          disable={isPending}
        />

        <Input
          register={register}
          errors={errors}
          label="آدرس ایمیل"
          type="email"
          name="email"
          disable={isPending}
        />

        <Input
          register={register}
          errors={errors}
          label="شماره تلفن"
          type="text"
          name="phone"
          disable={isPending}
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="py-3 px-6 rounded-md h-[48px] bg-stone-800 hover:bg-stone-900 text-white my-8 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? <FaSpinner className="animate-spin" /> : "ذخیره تغییرات"}
        </button>

        <button
          type="button"
          onClick={() => {
            reset();
            setTempUserImage("");
            setImageFile(null);
          }}
          disabled={isPending}
          className="py-3 px-6 rounded-md bg-red-500 hover:bg-red-600 text-white my-8 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          لغو
        </button>
      </div>
    </form>
  );
}

export default InformationInputs;
