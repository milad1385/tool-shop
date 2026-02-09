import React from "react";
import { FaXmark } from "react-icons/fa6";
import AddressItem from "./AddressItem";
import { FaPlus } from "react-icons/fa";

function AddressModal({ onClose }: { onClose?: any }) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">آدرس‌های شما</h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="pt-5">
        <AddressItem />
      </div>
      <div className="border-t-2 border-b-gray-200 mt-5 pt-5 pb-2">
        <button className="flex items-center gap-x-2 text-red-600 font-bold">
          <FaPlus className="text-lg" />
          افزودن آدرس جدید
        </button>
      </div>
    </div>
  );
}

export default AddressModal;
