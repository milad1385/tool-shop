"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  createProductSchema,
  TProductSchema,
} from "@/validators/frontend/product.validator";

import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";

function CreateNewProduct() {
  const [images, setImages] = useState<File[]>([]);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(createProductSchema),
  });

  const createProductHandler = (data: TProductSchema) => {
    console.log(data);
  };

  const deleteImage = (indexToDelete: number) => {
    const newImages = images.splice(indexToDelete, 1);
    console.log(newImages);

    setImages(newImages);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(createProductHandler)} className="section-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="نام"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="slug"
          type="text"
          label="لینک"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="category"
          type="select"
          className="!bg-gray-50"
          options={[
            { id: 1, label: "دسته بندی اول", value: "category1" },
            { id: 2, label: "دسته بندی دوم", value: "category2" },
          ]}
          label="دسته بندی"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <div></div>

        <Input
          register={register}
          errors={errors}
          name="description"
          type="textarea"
          label="توضیحات"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <div></div>

        <Input
          register={register}
          errors={errors}
          name="images"
          type="file"
          label="تصاویر"
          disable={false}
          labelClassName="!text-lg font-Iran"
          setImage={setImages}
          multiple
          setValue={setValue}
        />

        {images && (
          <div className="flex items-end justify-end gap-x-2">
            {images?.map((image, index) => (
              <div className="relative" key={index + 1}>
                <Image
                  src={URL.createObjectURL(image)}
                  width={1920}
                  height={1080}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                  alt="image"
                />

                <FaRegTrashAlt
                  onClick={() => deleteImage(index + 1)}
                  className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-x-4">
        <Button type="submit" className="!w-[200px] mt-10">
          ایجاد محصول
        </Button>
        <Button
          onClick={() => {
            reset();
            setImages([]);
          }}
          type="reset"
          className="!w-[200px] mt-10 !bg-red-500"
        >
          لغو
        </Button>
        <Button
          onClick={() => router.push("/p-admin/products/details")}
          type="reset"
          className="!w-[200px] mt-10 !bg-yellow-500"
        >
          ایجاد جزییات
        </Button>
      </div>
    </form>
  );
}

export default CreateNewProduct;
