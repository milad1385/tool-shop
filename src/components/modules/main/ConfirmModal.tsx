import Button from "@/components/ui/Button";
import { IModal } from "@/libs/types";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function ConfirmModal({
  onClose,
  isQuestion,
  status,
  isLoading,
  onSubmit,
}: IModal) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">توجه کنید</h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center">
        <p
          className={`text-sm md:text-xl font-bold pt-6 pb-8 p-2 text-justify`}
        >
          آیا از {status} اطمینان دارید ؟
        </p>

        <div className="flex items-center gap-x-8">
          <Button
            className="!w-[200px] !bg-green-600 !rounded-lg flex-center h-[48px]"
            onClick={onSubmit}
          >
            {isLoading ? <FaSpinner className="animate-spin h-5 w-5" /> : "بله"}
          </Button>
          <Button
            className="!w-[200px] !bg-red-600 !rounded-lg h-[48px]"
            onClick={() => onClose()}
          >
            خیر
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
