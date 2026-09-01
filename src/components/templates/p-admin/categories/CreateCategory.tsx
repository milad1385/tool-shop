"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SelectBox from "@/components/ui/SelectBox";
import { filterCategoryType } from "@/constants/data";
import { createCategory } from "@/libs/actions/category.actions";
import { ICreateCategory, ISelectBox } from "@/libs/types";
import {
  createCategorySchema,
  TCategorySchema,
} from "@/validators/frontend/category.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaMinus, FaPlus, FaRegTrashAlt, FaSpinner } from "react-icons/fa";

function CreateCategory({ categories }: ICreateCategory) {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ISelectBox>(null);
  const [featureCount, setFeatureCount] = useState(1);

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

  const categoriesOption = categories.map((category, index) => ({
    label: category.name,
    value: category._id,
  }));

  const onSubmit = async (data: TCategorySchema) => {
    setIsPending(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("href", data.href);
      formData.append("desc", data.desc);
      formData.append("tags", data.tags);
      formData.append("category", selectedOption?.value || "");

      if (imageFile) {
        formData.append("image", imageFile);
      }

      if (data.filters && data.filters.length > 0) {
        formData.append("filters", JSON.stringify(data.filters));
      }

      const result = await createCategory(formData);

      if (result.success) {
        toast.success(result.message);
        reset();
        setImage(null);
        setImageFile(null);
        setFeatureCount(1);
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
      console.log(error);

      toast.error("خطا در ارتباط با سرور");
    } finally {
      setIsPending(false);
    }
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

        <SelectBox
          register={register}
          errors={errors}
          placeholder="پرنت دسته بندی را انتخاب کنید"
          name="category"
          options={categoriesOption}
          title="پرنت دسته بندی"
          selected={selectedOption}
          onSelected={setSelectedOption}
          disable={isPending}
          searchable
        />

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
                  name={`filters.${index}.name`}
                  type="text"
                  label="نام ویژگی"
                  placeholder="نوع مته"
                  className="bg-white"
                  disable={false}
                  labelClassName="!text-sm"
                />

                <Input
                  register={register}
                  errors={errors}
                  name={`filters.${index}.slug`}
                  type="text"
                  label="اسلاگ ویژگی"
                  placeholder="power"
                  className="bg-white"
                  disable={false}
                  labelClassName="!text-sm"
                />

                <SelectBox
                  register={register}
                  errors={errors}
                  placeholder="نوع فیلتر را انتخاب کنید"
                  name={`filters.${index}.type`}
                  className="mt-0.5"
                  options={filterCategoryType}
                  title="نوع فیلتر"
                  disable={isPending}
                />
                <Input
                  register={register}
                  errors={errors}
                  name={`filters.${index}.options`}
                  type="text"
                  label="مقادیر ویژگی"
                  placeholder="مقدار 1 ، مقدار 2 ، مقدار 3 و..."
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
