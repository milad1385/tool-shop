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
import { FaRegTrashAlt } from "react-icons/fa";

function CreateCategory() {
  const [image, setImage] = useState<any>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(createCategorySchema),
  });

  const createCategoryHandler = (data: TCategorySchema) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createCategoryHandler)}
      className="section-box"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="name"
          type="text"
          label="نام"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="href"
          type="text"
          label="لینک"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="tags"
          type="text"
          label="تگ ها"
          placeholder="تگ ها را به صورت تگ 1 , تگ 2 , تگ 3 بنویسید"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="desc"
          type="text"
          label="توضیحات"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="category"
          type="select"
          options={[
            { id: 1, label: "دریل", value: "deral" },
            { id: 2, label: "سنگ بر", value: "stone" },
          ]}
          label="دسته بندی پرنت"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <div></div>
        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="آیکون"
          disable={false}
          labelClassName="!text-lg font-Iran"
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
      <div className="flex items-center gap-x-4">
        <Button type="submit" className="!w-[200px] mt-10">
          ایجاد دسته بندی
        </Button>
        <Button
          onClick={() => {
            reset();
            setImage("");
          }}
          type="reset"
          className="!w-[200px] mt-10 !bg-red-500"
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateCategory;
