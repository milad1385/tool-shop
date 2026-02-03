import Input from "@/components/ui/Input";
import {
  SellerInformationType,
  sellerInformation,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RegisterTitle from "./RegisterTitle";
import SelectBox from "@/components/ui/SelectBox";
import Button from "@/components/ui/Button";

function SellerInformation() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(sellerInformation),
  });

  const saveSellerInformation = (data: SellerInformationType) => {
    console.log(data);
  };
  return (
    <>
      <RegisterTitle content="اطلاعات فروشنده را وارد کنید" />

      <form
        onSubmit={handleSubmit(saveSellerInformation)}
        className="bg-white grid grid-cols-1 mx-5 md:mx-0 md:grid-cols-2 gap-x-4 gap-y-6 px-6 py-8 rounded-md shadow mt-8"
      >
        <Input
          register={register}
          errors={errors}
          name="name"
          type="text"
          label="نام"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="نام فروشنده را وارد کنید"
          className="!text-sm"
        />
        <Input
          register={register}
          errors={errors}
          name="lastname"
          type="text"
          label="نام خانوادگی"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="نام خانوادگی فروشنده را وارد کنید"
          className="!text-sm"
        />
        <Input
          register={register}
          errors={errors}
          name="email"
          type="text"
          label="ایمیل"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="ایمیل فروشنده را وارد کنید"
          className="!text-sm"
        />
        <Input
          register={register}
          errors={errors}
          name="phone"
          type="number"
          label="تلفن"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="ایمیل فروشنده را وارد کنید"
          className="!text-sm"
        />
        <Input
          register={register}
          errors={errors}
          name="nationalCode"
          type="number"
          label="کد ملی"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="کد ملی فروشنده را وارد کنید"
          className="!text-sm"
        />
        <Input
          register={register}
          errors={errors}
          name="storeName"
          type="text"
          label="نام فروشگاه"
          labelClassName="!text-[15px] md:!text-[17px]"
          placeholder="نام فروشگاه را وارد کنید"
          className="!text-sm"
        />

        <SelectBox
          register={register}
          errors={errors}
          name="gender"
          options={[
            { id: 1, label: "مرد", value: "male" },
            { id: 2, label: "زن", value: "famale" },
          ]}
          title="جنسیت : "
          className="!text-[15px]"
        />
        <div></div>
        <div className="flex items-center gap-x-4 mt-5">
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

export default SellerInformation;
