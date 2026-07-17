"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  changeShopSettingsSchema,
  TChangeShopSettingsSchema,
} from "@/validators/frontend/settings.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";

function ChangeShopSettings() {
 const [image, setImage] = useState<string | null>("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue
  } = useForm<any>({
    resolver: yupResolver(changeShopSettingsSchema),
  });

  const createProductHandler = (data: TChangeShopSettingsSchema) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(createProductHandler)} className="md:section-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="عنوان فروشگاه"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />
        <Input
          register={register}
          errors={errors}
          name="province"
          type="text"
          label="استان"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />
        <Input
          register={register}
          errors={errors}
          name="city"
          type="text"
          label="شهر"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />
        <Input
          register={register}
          errors={errors}
          name="email"
          type="email"
          label="ایمیل"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />
        <Input
          register={register}
          errors={errors}
          name="phone"
          type="number"
          label="تلفن ثابت"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />
        <Input
          register={register}
          errors={errors}
          name="mobilePhone"
          type="number"
          label="شماره همراه"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />

        <Input
          register={register}
          errors={errors}
          name="instagram"
          type="text"
          label="آیدی اینستاگرام"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />

        <Input
          register={register}
          errors={errors}
          name="telegram"
          type="text"
          label="آیدی تلگرام"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />
        <Input
          register={register}
          errors={errors}
          name="tags"
          type="text"
          label="تگ ها"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />
        <Input
          register={register}
          errors={errors}
          name="description"
          type="text"
          label="توضیحات"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />

        <Input
          register={register}
          errors={errors}
          name="address"
          type="textarea"
          label="آدرس"
          className="bg-white"
          disable={false}
          labelClassName="md:!text-lg"
        />
       <div></div>
        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="تصویر فروشگاه"
          disable={false}
          labelClassName="md:!text-lg font-Iran"
          setImage={setImage}
        />

        {image && (
          <div className="flex items-end justify-end">
            <div className="relative">
              <Image
                src={image}
                width={1920}
                height={1080}
                className="w-[200px] rounded-md"
                alt="image"
              />

              <FaRegTrashAlt
                onClick={() => {
                  setImage("");
                  setValue("image", "");
                }}
                className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-x-4 mt-6">
        <Button type="submit" className="!w-[200px]">
          تغییر تنظیمات
        </Button>

        <Button
          onClick={() => {
            reset();
          }}
          type="button"
          className="!w-[200px] !bg-red-500 !text-white"
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default ChangeShopSettings;
