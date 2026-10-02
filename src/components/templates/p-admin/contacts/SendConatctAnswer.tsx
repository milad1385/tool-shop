import Button from "@/components/ui/Button";
import { IModal } from "@/libs/types";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function SendConatctAnswer({ onClose, isLoading, onSubmit }: IModal) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">ارسال پاسخ</h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <textarea className="bg-gray-200 rounded-md w-full outline-none p-2.5 my-4 h-[175px]"></textarea>

        <div className="flex items-center w-full gap-x-8">
          <Button
            className="!w-full !bg-green-600 !rounded-lg flex-center h-[48px]"
            onClick={() => {
              onSubmit();
              onClose();
            }}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin h-5 w-5" />
            ) : (
              "ارسال پیغام"
            )}
          </Button>
          <Button
            className="!w-full !bg-red-600 !rounded-lg h-[48px]"
            onClick={() => onClose()}
          >
            لغو
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SendConatctAnswer;
