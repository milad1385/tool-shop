"use client";
import Input from "@/components/ui/Input";
import { editUser } from "@/libs/actions/user";
import {
  UserData,
  userValidorSchema,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiUploadSimple } from "react-icons/pi";
function InformationInputs() {
  const [tempUserImage, setTempUserImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidorSchema),
  });

  const editUserInformation = async (data: UserData) => {
    console.log(data);

    await editUser(data);
  };
  return (
    <form onSubmit={handleSubmit(editUserInformation)}>
      <div className="my-8">
        <div className="relative w-[125px] h-[125px] mx-auto">
          <Image
            src={tempUserImage ? tempUserImage : "/images/avatar-3.jpg"}
            alt="avatar-3.jpg"
            width={1920}
            height={1080}
            className="w-full h-full rounded-full "
          />
          <label
            htmlFor="upload"
            className="bg-sky-500  flex-center w-[35px] h-[35px] rounded-full cursor-pointer absolute top-20 right-0"
          >
            <PiUploadSimple className="text-lg text-white" />
          </label>
        </div>
        <input
          type="file"
          {...register("image", {
            onChange: (e) => {
              const url = URL.createObjectURL(e.target.files[0]);
              setTempUserImage(url);
            },
          })}
          name="image"
          id="upload"
          hidden
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          register={register}
          errors={errors}
          label="نام"
          type="text"
          name="name"
          className="text-right"
        />
        <Input
          register={register}
          errors={errors}
          label="نام خانوادگی"
          type="text"
          name="lastname"
          className="text-right"
        />
        <Input
          register={register}
          errors={errors}
          label="نام کاربری"
          type="text"
          name="username"
          className="text-right"
        />
        <Input
          register={register}
          errors={errors}
          label="آدرس ایمیل"
          type="email"
          name="email"
        />
        <Input
          register={register}
          errors={errors}
          label="رمز عبور قبلی"
          type="password"
          name="lastpassword"
        />
        <Input
          register={register}
          errors={errors}
          label="رمز عبور جدید"
          type="password"
          name="newpassword"
        />
        <Input
          register={register}
          errors={errors}
          label="آدرس سایت"
          type="text"
          name="site"
          className="text-right"
        />
        <Input
          register={register}
          errors={errors}
          label="شماره تلفن"
          type="text"
          name="phone"
        />
      </div>
      <button
        type="submit"
        className="py-3 px-6 rounded-md  bg-stone-800 hover:bg-stone-900 text-white my-8"
      >
        ذخیره تغییرات
      </button>
    </form>
  );
}

export default InformationInputs;
