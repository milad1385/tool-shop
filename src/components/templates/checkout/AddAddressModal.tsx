"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { addUserAddress } from "@/libs/actions/address.action";
import { IModal } from "@/libs/types";
import {
  userAddress,
  UserAddressType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner, FaXmark } from "react-icons/fa6";

const ChooseLocation = dynamic(
  () => import("@/components/modules/main/ChooseLocation"),
  {
    ssr: false,
    loading: () => <h3 className="mt-5">در حال لود ...</h3>,
  },
);

interface IAddAddressModalProps extends IModal {
  onSuccess?: (address: any) => void;
}

function AddAddressModal({ onClose, onSuccess }: IAddAddressModalProps) {
  const [position, setPosition] = useState<[number, number]>([35.7, 51.39]);
  const [isActive, setIsActive] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(userAddress),
  });

  const addNewUserAddress = async (data: UserAddressType) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("mobile", data.mobile);
        formData.append("address", data.address);
        formData.append("houseNumber", data.houseNumber);
        formData.append("unit", data.unit);
        formData.append("postalCode", data.postalCode);
        formData.append("lat", String(position[0]));
        formData.append("lan", String(position[1]));

        const result = await addUserAddress(formData);

        if (result.success) {
          toast.success(result.message);
          reset();

          if (onSuccess && result.address) {
            onSuccess(result.address);
          }
          onClose();
        } else if (result.errors) {
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field as any, {
              type: "server",
              message,
            });
          });
          toast.error("اطلاعات وارد شده معتبر نیست");
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white pt-4 pb-3">
      <div className="flex items-center justify-between px-5 border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">
          {isActive ? "وارد کردن آدرس" : "انتخاب آدرس"}
        </h3>
        <FaXmark
          onClick={() => !isPending && onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>

      {!isActive ? (
        <div className="px-5">
          <ChooseLocation position={position} onPosition={setPosition} />
          <div className="flex items-center gap-x-5 mt-5">
            <Button
              onClick={() => setIsActive((prev) => !prev)}
              className="text-sm md:text-base"
            >
              ذخیره لوکیشن
            </Button>
            <Button
              onClick={() => onClose()}
              className="!bg-red-500 text-sm md:text-base"
            >
              لغو
            </Button>
          </div>
        </div>
      ) : (
        <div className="px-5 h-[400px] overflow-y-auto">
          <ChooseLocation position={position} isShow />
          <form onSubmit={handleSubmit(addNewUserAddress)} className="mt-5">
            <div className="space-y-6">
              <Input
                register={register}
                errors={errors}
                name="address"
                type="text"
                label="آدرس"
                className="bg-gray-50"
                disable={isPending}
                labelClassName="!text-sm font-Iran"
              />
              <div className="flex gap-3">
                <div className="w-full">
                  <Input
                    register={register}
                    errors={errors}
                    name="houseNumber"
                    type="text"
                    label="پلاک"
                    className="bg-gray-50 w-full"
                    disable={isPending}
                    labelClassName="!text-sm font-Iran"
                  />
                </div>
                <div className="w-full">
                  <Input
                    register={register}
                    errors={errors}
                    name="unit"
                    type="text"
                    label="واحد"
                    className="bg-gray-50 w-full"
                    disable={isPending}
                    labelClassName="!text-sm font-Iran"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-full">
                  <Input
                    register={register}
                    errors={errors}
                    name="name"
                    type="text"
                    label="نام تحویل گیرنده"
                    className="bg-gray-50 w-full"
                    disable={isPending}
                    labelClassName="!text-sm font-Iran"
                  />
                </div>
                <div className="w-full">
                  <Input
                    register={register}
                    errors={errors}
                    name="mobile"
                    type="text"
                    label="شماره تحویل گیرنده"
                    className="bg-gray-50 w-full"
                    disable={isPending}
                    labelClassName="!text-sm font-Iran"
                  />
                </div>
              </div>
              <Input
                register={register}
                errors={errors}
                name="postalCode"
                type="text"
                label="کد پستی"
                className="bg-gray-50"
                disable={isPending}
                labelClassName="!text-sm font-Iran"
              />
            </div>

            <div className="flex items-center gap-4 mt-8">
              <Button
                type="submit"
                disabled={isPending}
                className="!bg-yellow-500 text-sm md:text-base flex items-center justify-center gap-2 h-[48px] w-[180px]"
              >
                {isPending ? (
                  <>
                    <FaSpinner className="animate-spin" />
                  </>
                ) : (
                  "افزودن آدرس"
                )}
              </Button>

              <Button
                type="button"
                onClick={() => setIsActive(false)}
                disabled={isPending}
                className="!bg-gray-400 text-sm md:text-base h-[48px]"
              >
                برگشت
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddAddressModal;
