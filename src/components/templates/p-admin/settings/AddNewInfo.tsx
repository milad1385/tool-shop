"use client";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  siteInfoSchema,
  TSiteInfoSchema,
} from "@/validators/frontend/settings.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function AddNewInfo() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(siteInfoSchema),
  });

  const saveSiteInfoHandler = (data: TSiteInfoSchema) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(saveSiteInfoHandler)} className="section-box">
      <PageTitle content="اطلاعات فوتر" className="!text-3xl mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="address"
          type="text"
          label="آدرس"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="email"
          type="text"
          label="ایمیل"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />

        <Input
          register={register}
          errors={errors}
          name="phone"
          type="text"
          label="تلفن ثابت"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="mobilePhone"
          type="text"
          label="تلفن همراه"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="instagram"
          type="text"
          label="آیدی اینستاگرام"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="telegram"
          type="text"
          label="آیدی تلگرام"
          className="bg-gray-50"
          disable={false}
          labelClassName="!text-lg font-Iran"
        />

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
      </div>
      <div className="flex items-center gap-x-4">
        <Button type="submit" className="!w-[200px] mt-10">
          ذخیره اطلاعات
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

export default AddNewInfo;
