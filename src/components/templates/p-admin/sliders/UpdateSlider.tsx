"use client";

import ImagePreview from "@/components/modules/p-admin/ImagePreview";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { updateSlider } from "@/libs/actions/slider.action";
import { IUpdateSlider } from "@/libs/types";
import {
  sliderSchema,
  TSliderSchema,
} from "@/validators/backend/slider.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

function UpdateSlider({ slider }: IUpdateSlider) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const { title, href, priority, image } = slider;

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
    resolver: zodResolver(sliderSchema),
    defaultValues: {
      title,
      href,
      priority: priority || 3,
    },
  });

  const onSubmit = async (data: TSliderSchema) => {
    setIsPending(true);

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("href", data.href);
      formData.append("priority", String(data.priority || 3));
      formData.append("sliderId", slider._id);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const result = await updateSlider(formData);

      if (result.success) {
        toast.success(result.message);
        if (imageFile) {
          setPreviewImage(URL.createObjectURL(imageFile));
        }
        setImageFile(null);
        router.replace("/p-admin/sliders");
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

  const handleRemoveImage = () => {
    setPreviewImage(image);
    setImageFile(null);
    setValue("image", null as any);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:section-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="title"
          type="text"
          label="عنوان"
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
          name="priority"
          type="number"
          label="اولویت"
          className="bg-gray-50"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
        />
        <div></div>
        <Input
          register={register}
          errors={errors}
          name="image"
          type="file"
          label="تصویر"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
          setImage={handleImageChange}
        />

        {previewImage && (
          <ImagePreview
            src={previewImage}
            alt="تصویر اسلایدر"
            onRemove={handleRemoveImage}
            showRemoveButton={!!imageFile}
            disabled={isPending}
            width={600}
          />
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
            "ویرایش اسلایدر"
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

export default UpdateSlider;
