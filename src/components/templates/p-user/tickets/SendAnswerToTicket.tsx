"use client";
import Input from "@/components/ui/Input";
import {
  AnswerTicketType,
  sendAnswerToTicketSchema,
} from "@/validators/frontend/tickets/ticket.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function SendAnswerToTicket() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sendAnswerToTicketSchema),
  });

  const sendTicketAnswer = async (data: AnswerTicketType) => {
    // codes
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(sendTicketAnswer)}
      id="reply-ticket"
      className="mt-10"
    >
      <Input
        register={register}
        errors={errors}
        label="متن پاسخ تیکت"
        name="content"
        type="textarea"
        placeholder="متن پاسخ خود را بنویسید ..."
      />
      <div className="flex gap-x-2 justify-end mt-2.5">
        <button className="bg-amber-500 px-4 py-2 text-white rounded-md">
          ارسال
        </button>
      </div>
    </form>
  );
}

export default SendAnswerToTicket;
