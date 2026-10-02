import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { sendAnswerContact } from "@/libs/actions/contact.actions";
import { IModal } from "@/libs/types";
import {
  SendAnswerFormValues,
  sendAnswerSchema,
} from "@/validators/backend/conatctus.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function SendContactAnswer({ onClose, id }: IModal) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SendAnswerFormValues>({
    resolver: zodResolver(sendAnswerSchema),
    defaultValues: {
      message: "",
    },
    mode: "onBlur",
  });

  const [isSending, startSendingAnswer] = useTransition();

  const handleFormSubmit = async (data: SendAnswerFormValues) => {
    try {
      startSendingAnswer(async () => {
        if (!id) return;
        try {
          const result = await sendAnswerContact(id, data.message);
          if (result.success) {
            toast.success(result.message);
            reset();
            onClose();
          } else {
            toast.error(result.message);
          }
        } catch (error) {
          toast.error("خطا در ارتباط با سرور");
        }
      });
      reset();
    } catch (error) {
      toast.error("مشکلی پیش آمده است");
    }
  };

  const isBusy = isSending || isSubmitting;

  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">ارسال پاسخ</h3>
        <FaXmark
          onClick={onClose}
          className="text-xl text-zinc-500 md:cursor-pointer hover:text-zinc-800 transition-colors"
        />
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="pt-4">
        <Input
          type="textarea"
          name="message"
          placeholder="پاسخ خود را بنویسید..."
          register={register}
          errors={errors}
          disable={isBusy}
          className="!h-[175px] !bg-gray-100"
        />

        <div className="flex items-center w-full gap-x-8 mt-10">
          <Button
            type="submit"
            disabled={isBusy}
            className="!w-full !bg-green-600 !rounded-lg flex-center h-[48px] disabled:!opacity-60 disabled:!cursor-not-allowed"
          >
            {isBusy ? (
              <FaSpinner className="animate-spin h-5 w-5" />
            ) : (
              "ارسال پیغام"
            )}
          </Button>

          <Button
            type="button"
            onClick={onClose}
            disabled={isBusy}
            className="!w-full !bg-red-600 !rounded-lg h-[48px] disabled:!opacity-60 disabled:!cursor-not-allowed"
          >
            لغو
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendContactAnswer;
