"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SelectBox from "@/components/ui/SelectBox";
import { updateCategory } from "@/libs/actions/category.actions";
import { ISelectBox, IUpdateCategory } from "@/libs/types";
import {
  TUpdateCategorySchema,
  updateCategorySchema,
} from "@/validators/backend/category.validator";
import {
  createCategorySchema,
  TCategorySchema,
} from "@/validators/frontend/category.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegTrashAlt, FaSpinner } from "react-icons/fa";

function UpdateCategory({ categories, category }: IUpdateCategory) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ISelectBox>({
    label: category?.parent?.name ?? "لطفا یک گزینه را انتخاب کنید",
    value: category?.parent?._id ?? "",
  });
  const router = useRouter();

  const { name, href, desc, tags, image } = category;

  useEffect(() => {
    if (image) {
      setPreviewImage(image);
    }
  }, [image]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    setError,
  } = useForm({
    resolver: zodResolver(updateCategorySchema),
    defaultValues: { tags: tags?.join(" ، ") || "", name, href, desc },
  });

  const categoriesOption = categories
    .map((category, index) => ({
      label: category.name,
      value: category._id,
    }))
    .filter((cat) => cat.value !== category._id);

  const onSubmit = async (data: TUpdateCategorySchema) => {
    setIsPending(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("href", data.href);
      formData.append("desc", data.desc);
      formData.append("tags", data.tags);
      formData.append("category", selectedOption?.value || "");
      formData.append("categoryId", category._id);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const result = await updateCategory(formData);

      if (result.success) {
        toast.success(result.message);
        if (imageFile) {
          setPreviewImage(URL.createObjectURL(imageFile));
        }
        setImageFile(null);
        router.replace("/p-admin/categories");
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

  const handleImageChange = (file: File) => {
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
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
          name="stars"
          options={categoriesOption}
          title="پرنت دسته بندی"
          searchable
          selected={selectedOption}
          onSelected={setSelectedOption}
          disable={isPending}
        />

        <div></div>

        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="آیکون"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
          setImage={handleImageChange}
        />

        {previewImage && (
          <div className="flex items-end justify-end">
            <div className="relative">
              <Image
                src={previewImage}
                width={200}
                height={200}
                className="w-[200px] h-[200px] rounded-md object-cover border-2 border-gray-200"
                alt="آیکون دسته بندی"
              />
              {imageFile && (
                <FaRegTrashAlt
                  onClick={() => {
                    setPreviewImage(image);
                    setImageFile(null);
                    setValue("image", null as any);
                  }}
                  className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer hover:text-red-700 transition-colors"
                />
              )}
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
            "ویرایش دسته بندی"
          )}
        </Button>

        <Button
          onClick={() => {
            reset();
            setPreviewImage(image);
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

export default UpdateCategory;
