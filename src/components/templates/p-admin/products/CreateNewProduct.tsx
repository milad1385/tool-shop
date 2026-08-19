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
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

function CreateNewProduct() {
  const [images, setImages] = useState<File[]>([]);
  const [featureCount, setFeatureCount] = useState(1);
  const [customFeatureCount, setCustomFeatureCount] = useState(1);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(createProductSchema),
    defaultValues: {
      features: [{ name: "", value: "" }],
      customFeatures: [{ name: "", value: "" }],
    },
  });

  const createProductHandler = (data: TProductSchema) => {
    const filteredFeatures = data.features?.filter(
      (feature: any) =>
        feature.name?.trim() !== "" || feature.value?.trim() !== "",
    );

    const filteredCustomFeatures = data.customFeatures?.filter(
      (feature: any) =>
        feature.name?.trim() !== "" || feature.value?.trim() !== "",
    );

    const finalData = {
      ...data,
      features: filteredFeatures || [],
      customFeatures: filteredCustomFeatures || [],
    };

    console.log("داده‌های نهایی:", finalData);
  };

  const deleteImage = (indexToDelete: number) => {
    const newImages = images.filter((_, index) => index !== indexToDelete);
    setImages(newImages);
  };

  const addFeature = () => {
    if (featureCount >= 10) return false;
    setFeatureCount((prev) => prev + 1);
  };

  const removeFeature = () => {
    if (featureCount > 1) {
      setFeatureCount((prev) => prev - 1);
    }
  };

  const addCustomFeature = () => {
    if (customFeatureCount >= 10) return false;
    setCustomFeatureCount((prev) => prev + 1);
  };

  const removeCustomFeature = () => {
    if (customFeatureCount > 1) {
      setCustomFeatureCount((prev) => prev - 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createProductHandler)}
      className="md:section-box"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="نام"
          className="bg-gray-50"
          disable={false}
          labelClassName="md:!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="slug"
          type="text"
          label="لینک"
          className="bg-gray-50"
          disable={false}
          labelClassName="md:!text-lg font-Iran"
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
          labelClassName="md:!text-lg font-Iran"
        />
        <div></div>
        <div className="col-span-1">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm md:text-lg text-zinc-800">
                ویژگی فیلتری :
              </label>
              <span className="text-sm text-gray-500">
                {featureCount} از ۱۰
              </span>
            </div>

            {Array.from({ length: featureCount }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-4 pb-6 mb-4 border rounded-lg bg-gray-50 relative"
              >
                <Input
                  register={register}
                  errors={errors}
                  name={`features.${index}.name`}
                  type="text"
                  label="نام ویژگی"
                  placeholder="مثال: حافظه"
                  className="bg-white"
                  disable={false}
                  labelClassName="!text-sm"
                />

                <Input
                  register={register}
                  errors={errors}
                  name={`features.${index}.value`}
                  type="text"
                  label="مقدار"
                  placeholder="مثال: 256"
                  className="bg-white"
                  disable={false}
                  labelClassName="!text-sm"
                />

                {featureCount > 1 && (
                  <button
                    type="button"
                    onClick={removeFeature}
                    className="absolute -top-3 -left-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
                    title="حذف این ویژگی"
                  >
                    <FaMinus size={12} />
                  </button>
                )}
              </div>
            ))}

            <Button
              type="button"
              onClick={addFeature}
              disabled={featureCount >= 10}
              className={`!w-full md:!w-[200px] !text-white flex items-center justify-center gap-2 ${
                featureCount >= 10
                  ? "!bg-gray-400 cursor-not-allowed"
                  : "!bg-sky-500 hover:!bg-sky-600"
              }`}
            >
              <FaPlus /> افزودن ویژگی جدید
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm md:text-lg text-zinc-800">
                ویژگی سفارشی :
              </label>
              <span className="text-sm text-gray-500">
                {customFeatureCount} از ۱۰
              </span>
            </div>

            {Array.from({ length: customFeatureCount }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-4 pb-6 mb-4 border rounded-lg bg-gray-50 relative"
              >
                <Input
                  register={register}
                  errors={errors}
                  name={`customFeatures.${index}.name`}
                  type="text"
                  label="نام ویژگی"
                  placeholder="مثال: برند"
                  className="bg-white"
                  disable={false}
                  labelClassName="!text-sm"
                />

                <Input
                  register={register}
                  errors={errors}
                  name={`customFeatures.${index}.value`}
                  type="text"
                  label="مقدار"
                  placeholder="مثال: سامسونگ"
                  className="bg-white"
                  disable={false}
                  labelClassName="!text-sm"
                />

                {customFeatureCount > 1 && (
                  <button
                    type="button"
                    onClick={removeCustomFeature}
                    className="absolute -top-3 -left-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
                    title="حذف این ویژگی"
                  >
                    <FaMinus size={12} />
                  </button>
                )}
              </div>
            ))}

            <Button
              type="button"
              onClick={addCustomFeature}
              disabled={customFeatureCount >= 10}
              className={`!w-full md:!w-[200px] !text-white flex items-center justify-center gap-2 ${
                customFeatureCount >= 10
                  ? "!bg-gray-400 cursor-not-allowed"
                  : "!bg-red-500 hover:!bg-red-600"
              }`}
            >
              <FaPlus /> افزودن ویژگی سفارشی
            </Button>
          </div>
        </div>

        <Input
          register={register}
          errors={errors}
          name="description"
          type="textarea"
          label="توضیحات"
          className="bg-gray-50"
          disable={false}
          labelClassName="md:!text-lg font-Iran"
        />
        <div></div>
        <Input
          register={register}
          errors={errors}
          name="images"
          type="file"
          label="تصاویر"
          disable={false}
          labelClassName="md:!text-lg font-Iran"
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
                  onClick={() => deleteImage(index)}
                  className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="gap-x-4 grid md:flex grid-cols-2 pb-5">
        <Button type="submit" className="md:!w-[200px] mt-10">
          ایجاد محصول
        </Button>
        <Button
          onClick={() => {
            reset();
            setImages([]);
            setFeatureCount(1);
            setCustomFeatureCount(1);
          }}
          type="reset"
          className="md:!w-[200px] mt-10 !bg-red-500"
        >
          لغو
        </Button>
        <Button
          onClick={() => router.push("/p-admin/products/details")}
          type="reset"
          className="md:!w-[200px] mt-10 !bg-yellow-500"
        >
          ایجاد جزییات
        </Button>
        <Button
          onClick={() => router.push("/p-admin/products/feature")}
          type="reset"
          className="md:!w-[200px] mt-10 !bg-purple-600"
        >
          ایجاد ویژگی
        </Button>
      </div>
    </form>
  );
}

export default CreateNewProduct;
