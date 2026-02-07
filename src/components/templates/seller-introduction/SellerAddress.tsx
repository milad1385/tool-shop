import React, { useState } from "react";
import RegisterTitle from "./RegisterTitle";
import { provinceData } from "@/constants/data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  sellerAddressInfo,
  sellerAddressInfoType,
} from "@/validators/frontend/user/user.validator";
import SelectBox from "@/components/ui/SelectBox";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

function SellerAddress() {
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(sellerAddressInfo),
  });

  const provinceOptions = provinceData();

  const cities = province?.value?.map((city, index) => ({
    id: index + 1,
    label: city,
  }));

  const saveSellerAddress = (data: sellerAddressInfoType) => {
    console.log(data);

    if (!province || !city) return;

    router.push(`${pathname}?step=2&substep=2`);
  };

  return (
    <>
      <RegisterTitle content="آدرس فروشگاه را ثبت کنید" />
      <form
        onSubmit={handleSubmit(saveSellerAddress)}
        className="bg-white grid grid-cols-1 mx-5 md:mx-0 md:grid-cols-2 gap-x-4 gap-y-6 px-6 py-8 rounded-md shadow mt-8"
      >
        <SelectBox
          options={provinceOptions}
          searchable
          title="نام استان"
          name="province"
          selected={province}
          onSelected={setProvince}
          placeholder="استان مورد نظر را انتخاب کنید"
          noOptionMsg="استان مورد نظر یافت نشد"
        />
        <SelectBox
          options={cities}
          searchable
          title="نام شهر"
          name="city"
          selected={city}
          onSelected={setCity}
          placeholder={
            !province
              ? "ابتدا استان را انتخاب کنید"
              : "شهر مورد نظر را انتخاب کنید"
          }
          noOptionMsg="شهر مورد نظر یافت نشد"
          disable={!province}
        />
        <Input
          register={register}
          errors={errors}
          name="address"
          type="text"
          label="آدرس"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="آدرس را وارد کنید"
          className="!text-sm"
        />
        <Input
          register={register}
          errors={errors}
          name="postalCode"
          type="text"
          label="کد پستی"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="کد پستی را وارد کنید"
          className="!text-sm"
        />
        <Input
          register={register}
          errors={errors}
          name="desc"
          type="textarea"
          label="توضیحات"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="توضیحات فروشگاه را وارد کنید"
          className="!text-sm"
        />

        <div className="flex items-center gap-x-4 md:mt-[158px]">
          <Button type="submit" className="!w-[200px] text-sm md:text-base">
            ذخیره اطلاعات
          </Button>
          <Button
            onClick={() => reset()}
            type="reset"
            className="!w-[200px] !bg-red-500 text-sm md:text-base"
          >
            لغو
          </Button>
        </div>
      </form>
    </>
  );
}

export default SellerAddress;
