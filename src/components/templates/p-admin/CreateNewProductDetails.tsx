"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  productDetailSchema,
  TProductDetailSchema,
} from "@/validators/frontend/product.validator";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function CreateNewProductDetails() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(productDetailSchema),
  });

  const createProductDetails = (data: TProductDetailSchema) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(createProductDetails)} className="section-box">
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
          name="price"
          type="number"
          label="قیمت"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="discount"
          type="number"
          label="درصد تخفیف"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="stock"
          type="number"
          label="تعداد موجودی"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="colorLabel"
          type="text"
          label="نام رنگ"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="color"
          type="color"
          label="کد رنگ"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <Button type="submit" className="!w-[200px] mt-10">
          ایجاد جزییات
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

export default CreateNewProductDetails;
