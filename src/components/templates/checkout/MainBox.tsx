"use client";
import Button from "@/components/ui/Button";
import { createOrder } from "@/libs/actions/order.action";
import { IDeliverySlot, IMainBox } from "@/libs/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import ChooseAddress from "./ChooseAddress";
import ChooseTime from "./ChooseTime";
import Orders from "./Orders";
import Title from "./Title";

function MainBox({ cart, userAdresses, slots }: IMainBox) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeAddress, setActiveAddress] = useState(userAdresses[0]?._id);
  const [selectedSlot, setSelectedSlot] = useState<IDeliverySlot | null>(null);

  const createOrderHandler = () => {
    if (!activeAddress) {
      toast.error("لطفاً یک آدرس انتخاب کنید");
      return;
    }

    if (!selectedSlot) {
      toast.error("یک زمان برای دریافت مرسوله انتخاب کنید");
      return;
    }

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("addressId", activeAddress);
        formData.append("slotId", selectedSlot._id);

        const result = await createOrder(formData);

        if (result.success) {
          toast.success(result.message);
          router.push(result?.data?.paymentUrl);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  return (
    <div className="col-span-12 md:col-span-9 bg-white rounded-3xl p-5 md:p-8">
      <Title title="آدرس و زمان ارسال" />

      <ChooseAddress
        userAdresses={userAdresses}
        onActive={setActiveAddress}
        activeAddress={activeAddress}
      />

      <Orders cart={cart} />

      <ChooseTime
        slots={slots}
        selectedSlot={selectedSlot}
        onSelect={setSelectedSlot}
      />

      <div className="flex gap-x-4">
        <Button
          className="!w-[150px] mt-10 flex items-center justify-center gap-2"
          onClick={createOrderHandler}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <FaSpinner className="animate-spin" />
            </>
          ) : (
            "تایید سفارش"
          )}
        </Button>

        <Link href="/cart">
          <Button className="!w-[150px] mt-10 !bg-red-600" disabled={isPending}>
            برگشت
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainBox;
