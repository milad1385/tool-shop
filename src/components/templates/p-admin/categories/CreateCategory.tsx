// app/p-admin/categories/create/page.tsx
"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  createCategorySchema,
  TCategorySchema,
} from "@/validators/frontend/category.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegTrashAlt, FaSpinner } from "react-icons/fa";
import { createCategory } from "@/libs/actions/category.actions";
import toast from "react-hot-toast";

function CreateCategory() {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(createCategorySchema),
  });

  const onSubmit = async (data: TCategorySchema) => {
    setIsPending(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("href", data.href);
      formData.append("desc", data.desc);
      formData.append("tags", data.tags);
      formData.append("category", data.category || "");

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const result = await createCategory(formData);

      if (result.success) {
        toast.success(result.message);
        reset();
        setImage(null);
        setImageFile(null);
      } else if (result.errors) {
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
      toast.error("خطا در ارتباط با سرور");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:section-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="name"
          type="text"
          label="نام"
          className="bg-gray-50"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="href"
          type="text"
          label="لینک"
          className="bg-gray-50"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="tags"
          type="text"
          label="تگ ها"
          className="bg-gray-50"
          placeholder="مثال: تگ 1 , تگ 2 , تگ 3"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="desc"
          type="text"
          label="توضیحات"
          className="bg-gray-50"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="category"
          type="select"
          className="!bg-gray-50"
          options={[
            { id: 1, label: "دریل", value: "deral" },
            { id: 2, label: "سنگ بر", value: "stone" },
          ]}
          label="دسته بندی پرنت"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
        />

        <div></div>

        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="آیکون"
          disable={isPending}
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
                alt="آیکون دسته بندی"
              />
              <FaRegTrashAlt
                onClick={() => {
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
          disabled={isPending}
        >
          {isPending ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            "ایجاد دسته بندی"
          )}
        </Button>

        <Button
          onClick={() => {
            reset();
            setImage(null);
            setImageFile(null);
          }}
          type="reset"
          className="!w-[200px] mt-10 !bg-red-500"
          disabled={isPending}
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateCategory;
