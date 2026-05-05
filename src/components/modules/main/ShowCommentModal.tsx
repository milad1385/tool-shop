import Button from "@/components/ui/Button";
import { IModal } from "@/libs/types";
import { FaXmark } from "react-icons/fa6";

function ShowCommentModal({ onClose }: IModal) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">
          متن کامنت میلاد سلامیان
        </h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm md:text-base/[32px] text-wrap  pt-6 pb-8 p-2 text-justify">
          با سلام ، نظر من راجع به محصول دریل شارژی زرد رنگ می باشد. بهترین
          محصولی بود که خریداری کردم ، با تشکر از زحمات شما
        </p>

        <div className="flex items-center gap-x-8">
          <Button
            className="!w-[200px] !bg-black-600 !rounded-lg"
            onClick={() => onClose()}
          >
            مشاهده کردم
          </Button>
          
        </div>
      </div>
    </div>
  );
}

export default ShowCommentModal;
