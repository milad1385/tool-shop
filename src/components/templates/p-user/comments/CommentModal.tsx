import Button from "@/components/ui/Button";
import { IModal } from "@/libs/types";
import React from "react";
import { FaXmark } from "react-icons/fa6";

function CommentModal({ onClose }: IModal) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">کامنت محمد اکبری</h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm md:text-base/[32px] p-2 text-justify">
          سلام ، به نظر من کالا بسیار مفیدی بود و همچنین فروشنده به سرعت و
          کمترین قیمت نسبت به سایر فروشنده ها این کالا بسیار خوب را عرضه کردند ،
          ممنون از سایت ترازو.
        </p>

        <Button className="!w-[200px] !rounded-lg" onClick={() => onClose()}>
          مشاهده کردم
        </Button>
      </div>
    </div>
  );
}

export default CommentModal;
