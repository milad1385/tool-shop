import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  userAddress,
  UserAddressType,
} from "@/validators/frontend/user/user.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";

const ChooseLocation = dynamic(
  () => import("@/components/modules/main/ChooseLocation"),
  {
    ssr: false,
    loading: () => <h3 className="mt-5">در حال لود ...</h3>,
  },
);

function AddAddressModal({ onClose }: { onClose?: any }) {
  const [position, setPosition] = useState<[number, number]>([35.7, 51.39]);
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(userAddress),
  });

  const addNewUserAddress = async (data: UserAddressType) => {
    console.log(data);
  };

  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white  pt-4 pb-3">
      <div className="flex items-center justify-between px-5 border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">
          {isActive ? "وارد کردن آدرس" : "انتخاب آدرس"}
        </h3>
        <FaXmark
          onClick={() => onClose()}
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
                disable={false}
                labelClassName="!text-sm font-Iran"
              />
              <div className="flex gap-3">
                <div className="w-full">
                  <Input
                    register={register}
                    errors={errors}
                    name="pelak"
                    type="text"
                    label="پلاک"
                    className="bg-gray-50 w-full"
                    disable={false}
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
                    disable={false}
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
                disable={false}
                labelClassName="!text-sm font-Iran"
              />
            </div>

            <Button className="!bg-yellow-500 text-sm md:text-base mt-8">
              افزودن آدرس
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddAddressModal;
