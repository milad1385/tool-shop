"use client";
import Input from "@/components/ui/Input";
import React from "react";
import { useForm } from "react-hook-form";

function CreateCategory() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  return (
    <div className="bg-white rounded-xl px-8 pt-5 pb-10 my-5 shadow grid grid-cols-1 md:grid-cols-2 gap-7">
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
        label="دسته بندی پرنت"
        disable={false}
        labelClassName="!text-lg font-Iran"
      />
      <Input
        register={register}
        errors={errors}
        name="image"
        type="file"
        label="آیکون"
        disable={false}
        labelClassName="!text-lg font-Iran"
      />
    </div>
  );
}

export default CreateCategory;
