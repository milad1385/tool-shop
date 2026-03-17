"use client";
import Modal from "@/components/modules/main/Modal";
import React from "react";
import { FaTruck } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";
import AddressModal from "./AddressModal";
import Orders from "./Orders";
import Title from "./Title";
import ChooseTime from "./ChooseTime";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ChooseAddress from "./ChooseAddress";

function MainBox() {
  return (
    <div className="col-span-12 md:col-span-9 bg-white rounded-3xl p-5 md:p-8">
      <Title title="آدرس و زمان ارسال" />
      <ChooseAddress />
      <Orders />
      <ChooseTime />
      <div className="flex gap-x-4">
        <Button className="!w-[150px] mt-10">تایید اطلاعات</Button>
        <Link href="/cart">
          <Button className="!w-[150px] mt-10 !bg-red-600">برگشت</Button>
        </Link>
      </div>
    </div>
  );
}

export default MainBox;
