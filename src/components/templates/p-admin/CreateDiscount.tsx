"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  createDiscountSchema,
  TDiscountSchema,
} from "@/validators/frontend/discount.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

function CreateDiscount() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(createDiscountSchema),
  });

  const createDiscountHandler = (data: TDiscountSchema) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createDiscountHandler)}
      className="section-box"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="عنوان کد"
          disable={false}
          className="bg-gray-50"
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="percentage"
          type="text"
          label="درصد"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="usage"
          type="text"
          className="bg-gray-50"
          label="تعداد مصرف"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="product"
          type="select"
          options={[
            { id: 1, label: "دریل", value: "deral" },
            { id: 2, label: "سنگ بر", value: "stone" },
          ]}
          label="محصول"
          disable={false}
          labelClassName="!text-lg font-Iran"
          className="!bg-gray-50"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <Button type="submit" className="!w-[200px] mt-10">
          ایجاد کد تخفیف
        </Button>
        <Button
          onClick={() => {
            reset();
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

export default CreateDiscount;
