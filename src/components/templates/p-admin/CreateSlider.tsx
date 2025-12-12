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
import { FaRegTrashAlt } from "react-icons/fa";

function CreateSlider() {
  const [image, setImage] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(sliderSchema),
  });

  const createSliderHandler = (data: TSliderSchema) => {
    console.log(data);
  };
  return (
    <form className="section-box" onSubmit={handleSubmit(createSliderHandler)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="عنوان"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="href"
          type="text"
          label="لینک"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="order"
          type="number"
          label="اولویت"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <div></div>
        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="تصویر"
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
          ایجاد اسلایدر
        </Button>
        <Button
          onClick={() => {
            reset();
            setImage(null);
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

export default CreateSlider;
