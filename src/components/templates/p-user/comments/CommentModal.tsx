import Button from "@/components/ui/Button";
import { IModal } from "@/libs/types";
import { FaXmark } from "react-icons/fa6";

function CommentModal({ message, name, onClose }: IModal) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">کامنت {name}</h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm md:text-base/[32px] text-wrap p-2 text-justify">
          {message}
        </p>

        <Button className="!w-[200px] mt-8 !rounded-lg" onClick={() => onClose()}>
          مشاهده کردم
        </Button>
      </div>
    </div>
  );
}

export default CommentModal;
