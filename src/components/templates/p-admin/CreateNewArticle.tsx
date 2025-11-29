"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  articleSchema,
  TArticleValidator,
} from "@/validators/frontend/article.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";
const ArticleEditor = dynamic(() => import("./ArticleEditor"), { ssr: false });

function CreateNewArticle() {
  const [articleValue, setArticleValue] = useState(null);
  const [image, setImage] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(articleSchema),
  });

  const createNewArticle = (data: TArticleValidator) => {
    console.log(data);
  };

  return (
    <form className="section-box" onSubmit={handleSubmit(createNewArticle)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="عنوان"
          disable={false}
          className="bg-gray-50"
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="link"
          type="text"
          label="لینک"
          disable={false}
          className="bg-gray-50"
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="tags"
          type="text"
          label="تگ ها"
          placeholder="تگ اول ، تگ دوم ، تگ سوم"
          disable={false}
          className="bg-gray-50"
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="readingTime"
          type="text"
          label="مدت زمان خواندن"
          placeholder="23 دقیقه"
          disable={false}
          className="bg-gray-50"
          labelClassName="!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="shortDescription"
          type="text"
          label="توضیحات کوتاه"
          disable={false}
          className="bg-gray-50"
          labelClassName="!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="category"
          type="select"
          options={[
            { id: 1, label: "دسته بندی اول", value: "deral" },
            { id: 2, label: "دسته بندی دوم", value: "stone" },
          ]}
          label="دسته بندی"
          disable={false}
          labelClassName="!text-lg font-Iran"
          className="!bg-gray-50"
        />

        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="کاور اصلی"
          disable={false}
          labelClassName="!text-lg font-Iran"
          setImage={setImage}
        />

        {image && (
          <div className="flex items-end justify-end">
            <div className="relative">
              <Image
                src={image}
                width={1920}
                height={1080}
                className="w-[200px] rounded-md"
                alt="image"
              />

              <FaRegTrashAlt
                onClick={() => {
                  setImage("");
                  setValue("image", "");
                  reset();
                }}
                className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
      <ArticleEditor article={articleValue} onArticle={setArticleValue} />
      <div className="flex items-center gap-x-4">
        <Button type="submit" className="!w-[200px] mt-10">
          ایجاد مقاله
        </Button>
        <Button type="submit" className="!w-[200px] mt-10 !bg-purple-600">
          پیش نویس
        </Button>
        <Button
          onClick={() => {}}
          type="reset"
          className="!w-[200px] mt-10 !bg-red-500"
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateNewArticle;
