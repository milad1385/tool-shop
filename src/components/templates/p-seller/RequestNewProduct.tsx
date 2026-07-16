"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  createRequestProductSchema,
  TRequestProductSchema,
} from "@/validators/frontend/product.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";

function RequestNewProduct() {
  const [colorCount, setColorCount] = useState(1);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    resolver: yupResolver(createRequestProductSchema),
    defaultValues: {
      product: "",
      colors: [{ label: "", color: "", qty: 0 }],
    },
  });

  const createProductHandler = (data: TRequestProductSchema) => {
    console.log("Submitted Data:", data);
  };

  const addColor = () => {
    if (colorCount >= 6) return false;
    setColorCount((prev) => prev + 1);
  };

  const removeColor = () => {
    if (colorCount > 1) {
      setColorCount((prev) => prev - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit(createProductHandler)} className="section-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="product"
          type="select"
          className="!bg-gray-50"
          options={[
            { id: 1, label: "محصول شماره 1", value: "product1" },
            { id: 2, label: "محصول شماره 2", value: "product2" },
          ]}
          label="محصول"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <div></div>

        {Array.from({ length: colorCount }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 px-4 pt-4 pb-10 border rounded bg-gray-50"
          >
            <Input
              register={register}
              errors={errors}
              name={`colors.${index}.label`}
              type="text"
              label="نام رنگ"
              className="bg-white"
              disable={false}
              labelClassName="!text-sm"
            />

            <Input
              register={register}
              errors={errors}
              name={`colors.${index}.color`}
              type="color"
              label="کد رنگ"
              className="bg-white h-10 p-1"
              disable={false}
              labelClassName="!text-sm"
            />
            <Input
              register={register}
              errors={errors}
              name={`colors.${index}.price`}
              type="number"
              label="قیمت"
              className="bg-white"
              disable={false}
              labelClassName="!text-sm"
            />
            <Input
              register={register}
              errors={errors}
              name={`colors.${index}.discount`}
              type="number"
              label="تخفیف"
              className="bg-white"
              disable={false}
              labelClassName="!text-sm"
             
            />
            <Input
              register={register}
              errors={errors}
              name={`colors.${index}.qty`}
              type="number"
              label="موجودی رنگ"
              className="bg-white"
              disable={false}
              labelClassName="!text-sm"
            />

            {colorCount > 1 && (
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={removeColor}
                  className="text-red-500 hover:text-red-700 mb-2"
                  title="حذف این رنگ"
                >
                  <FaMinus />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:items-center gap-4 mt-6">
        <Button type="submit" className="!w-full md:!w-[200px]">
          درخواست محصول
        </Button>
        <Button
          type="button"
          onClick={addColor}
          className="!w-full md:!w-[200px] !bg-green-500 !text-white flex items-center justify-center gap-x-4"
        >
          <FaPlus className="mr-2" /> افزودن رنگ دیگر
        </Button>
        <Button
          onClick={() => {
            reset();
            setColorCount(1);
          }}
          type="button"
          className="!w-full md:!w-[200px] !bg-red-500 justify-center !text-white"
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default RequestNewProduct;
