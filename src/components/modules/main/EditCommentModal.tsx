import Button from "@/components/ui/Button";
import { IModal } from "@/libs/types";
import { FaXmark } from "react-icons/fa6";

function EditCommentModal({ onClose }: IModal) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">
          ویرایش کامنت میلاد سلامیان
        </h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center">
        <textarea
          rows={8}
          defaultValue=" با سلام ، نظر من راجع به محصول دریل شارژی زرد رنگ می باشد. بهترین
          محصولی بود که خریداری کردم ، با تشکر از زحمات شما"
          className={`input w-full resize-none mt-4  p-2 border border-gray-300 rounded-md`}
        ></textarea>

        <Button
          className="!w-full !bg-black-600 !rounded-lg"
          onClick={() => onClose()}
        >
          ویرایش کردن
        </Button>
      </div>
    </div>
  );
}

export default EditCommentModal;
