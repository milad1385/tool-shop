"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import ChooseAddress from "./ChooseAddress";
import ChooseTime from "./ChooseTime";
import Orders from "./Orders";
import Title from "./Title";
import { IDeliverySlot } from "@/libs/types";
import toast from "react-hot-toast";

function MainBox({ cart, userAdresses, slots }) {
  const [activeAddress, setActiveAddress] = useState(userAdresses[0]._id);
  const [selectedSlot, setSelectedSlot] = useState<IDeliverySlot | null>(null);

  const createOrderHandler = () => {
    if(!selectedSlot){
      toast.error("یک زمان برای دریافت مرسوله انتخاب کنید")
    }
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
        <Button className="!w-[150px] mt-10" onClick={createOrderHandler}>
          تایید اطلاعات
        </Button>
        <Link href="/cart">
          <Button className="!w-[150px] mt-10 !bg-red-600">برگشت</Button>
        </Link>
      </div>
    </div>
  );
}

export default MainBox;
