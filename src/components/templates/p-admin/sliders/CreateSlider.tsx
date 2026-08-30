"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  sliderSchema,
  TSliderSchema,
} from "@/validators/frontend/settings.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegTrashAlt, FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { createSlider } from "@/libs/actions/slider.action";

function CreateSlider() {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(sliderSchema),
  });

  const createSliderHandler = async (data: TSliderSchema) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("href", data.href);
      formData.append("priority", String(data.priority || 3));

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const result = await createSlider(formData);

      if (result.success) {
        toast.success(result.message);
        reset();
        setImage(null);
        setImageFile(null);
        setValue("image", null);
        router.push("/p-admin/sliders");
      } else if (result.errors) {
        console.log(result.errors);
        
        Object.entries(result.errors).forEach(([field, message]) => {
          setError(field as any, {
            type: "server",
            message,
          });
        });
        toast.error("اطلاعات وارد شده معتبر نیست");
      } else if (!result.success && result.message) {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("خطا:", error);
      toast.error("خطا در ارتباط با سرور");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="md:section-box"
      onSubmit={handleSubmit(createSliderHandler)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="عنوان"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="md:!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="href"
          type="text"
          label="لینک"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="md:!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="priority"
          type="number"
          label="اولویت"
          className="bg-gray-50"
          disable={isLoading}
          labelClassName="md:!text-lg font-Iran"
        />
        <div></div>
        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="تصویر"
          disable={isLoading}
          labelClassName="md:!text-lg font-Iran"
          setImage={(file: File) => {
            setImageFile(file);
            setImage(URL.createObjectURL(file));
          }}
        />

        {image && (
          <div className="flex items-end justify-end">
            <div className="relative">
              <Image
                src={image}
                width={200}
                height={200}
                className="w-[200px] h-[200px] rounded-md object-cover"
                alt="تصویر اسلایدر"
              />
              <FaRegTrashAlt
                onClick={() => {
                  // پاک کردن URL Object برای جلوگیری از نشتی حافظه
                  URL.revokeObjectURL(image);
                  setImage(null);
                  setImageFile(null);
                  setValue("image", null as any);
                }}
                className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer hover:text-red-700 transition-colors"
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-x-4">
        <Button
          type="submit"
          className="!w-[200px] h-[48px] mt-10 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            "ایجاد اسلایدر"
          )}
        </Button>
        <Button
          onClick={() => {
            reset();
            setImage(null);
            setImageFile(null);
            setValue("image", null as any);
          }}
          type="reset"
          className="!w-[200px] mt-10 !bg-red-500"
          disabled={isLoading}
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateSlider;