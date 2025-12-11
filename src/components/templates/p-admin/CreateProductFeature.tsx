"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  productFeatureSchema,
  TProductFeatureSchema,
} from "@/validators/frontend/product.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

function CreateProductFeature() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(productFeatureSchema),
  });

  const createProductFeature = (data: TProductFeatureSchema) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(createProductFeature)} className="section-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="product"
          type="select"
          className="!bg-gray-50"
          options={[
            { id: 1, label: "محصول 1", value: "product1" },
            { id: 2, label: "محصول 2", value: "product2" },
          ]}
          label="نام محصول"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
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
          name="value"
          type="text"
          label="مقدار"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="slug"
          type="text"
          label="اسلاگ"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="parent"
          type="text"
          label="دسته بندی"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <Button type="submit" className="!w-[200px] mt-10">
          ایجاد ویژگی
        </Button>
        <Button
          onClick={() => reset()}
          type="reset"
          className="!w-[200px] mt-10 !bg-red-500"
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateProductFeature;
