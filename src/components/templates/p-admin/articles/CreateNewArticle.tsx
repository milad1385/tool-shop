"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SelectBox from "@/components/ui/SelectBox";
import { createArticle } from "@/libs/actions/article.action";
import { ICreateNewArticle, ISelectOption } from "@/libs/types";
import { articleSchema } from "@/validators/backend/article.validator";
import { TArticleValidator } from "@/validators/frontend/article.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";

const ArticleEditor = dynamic(() => import("./ArticleEditor"), { ssr: false });

function CreateNewArticle({ categories }: ICreateNewArticle) {
  const [articleValue, setArticleValue] = useState(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<ISelectOption | null>(null);
  const [isPending, startTransition] = useTransition();

  const isDraftRef = useRef(false);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    setError,
  } = useForm<TArticleValidator>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      link: "",
      tags: "",
      readingTime: "",
      shortDescription: "",
      category: "",
      image: undefined,
    },
  });

  const createNewArticle = (data: TArticleValidator) => {
    startTransition(async () => {
      if (!articleValue || JSON.stringify(articleValue).length < 8) {
        toast.error("متن مقاله را وارد کنید");
        return;
      }

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("link", data.link);
      formData.append("tags", data.tags);
      formData.append("readingTime", data.readingTime);
      formData.append("shortDescription", data.shortDescription);
      formData.append("category", data.category);
      formData.append("content", JSON.stringify(articleValue));
      formData.append("status", isDraftRef.current ? "draft" : "published");

      if (imageFile) {
        formData.append("image", imageFile);
      }

      try {
        const result = await createArticle(formData);

        if (result.success) {
          toast.success(result.message);
          handleReset();
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
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  const categoriesOption = categories.map((category) => ({
    label: category.name,
    value: category._id,
  }));

  const handleImageChange = (file: File | null) => {
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setValue("image", undefined as any, { shouldValidate: true });
  };

  const handleReset = () => {
    reset();
    setImageFile(null);
    setImagePreview(null);
    setSelectedCategory(null);
    setArticleValue(null);
    isDraftRef.current = false;
  };

  return (
    <form
      className="md:section-box"
      onSubmit={handleSubmit(createNewArticle)}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="عنوان"
          disable={isPending}
          className="bg-gray-50"
          labelClassName="md:!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="link"
          type="text"
          label="لینک"
          disable={isPending}
          className="bg-gray-50"
          labelClassName="md:!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="tags"
          type="text"
          label="تگ ها"
          placeholder="تگ اول ، تگ دوم ، تگ سوم"
          disable={isPending}
          className="bg-gray-50"
          labelClassName="md:!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="readingTime"
          type="text"
          label="مدت زمان خواندن"
          placeholder="23 دقیقه"
          disable={isPending}
          className="bg-gray-50"
          labelClassName="md:!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="shortDescription"
          type="text"
          label="توضیحات کوتاه"
          disable={isPending}
          className="bg-gray-50"
          labelClassName="md:!text-lg font-Iran"
        />

        <SelectBox
          control={control}
          placeholder="دسته بندی را انتخاب کنید"
          name="category"
          options={categoriesOption}
          title="دسته بندی"
          searchable
          selected={selectedCategory}
          onSelected={setSelectedCategory}
          errors={errors}
          disable={isPending}
        />

        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="کاور اصلی"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
          setImage={handleImageChange}
        />

        {imagePreview && (
          <div className="flex items-end justify-end">
            <div className="relative">
              <Image
                src={imagePreview}
                width={1920}
                height={1080}
                className="w-[200px] rounded-md"
                alt="image"
              />

              <FaRegTrashAlt
                onClick={handleRemoveImage}
                className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      <ArticleEditor article={articleValue} onArticle={setArticleValue} />

      <div className="flex items-center gap-x-4">
        <Button
          type="submit"
          className="!w-[200px] mt-10"
          disabled={isPending}
          onClick={() => {
            isDraftRef.current = false;
          }}
        >
          {isPending && !isDraftRef.current ? "در حال ارسال..." : "ایجاد مقاله"}
        </Button>

        <Button
          type="submit"
          className="!w-[200px] mt-10 !bg-purple-600"
          disabled={isPending}
          onClick={() => {
            isDraftRef.current = true;
          }}
        >
          {isPending && isDraftRef.current ? "در حال ارسال..." : "پیش نویس"}
        </Button>

        <Button
          type="button"
          onClick={handleReset}
          className="!w-[200px] mt-10 !bg-red-500"
          disabled={isPending}
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateNewArticle;
