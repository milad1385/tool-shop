"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SelectBox from "@/components/ui/SelectBox";
import { departments, priority } from "@/constants/data";
import {
  newTicketSchema,
  newTicketType,
} from "@/validators/frontend/tickets/ticket.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SendTicketForm() {
  const [selected, setSelected] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newTicketSchema),
  });

  const sendNewTicketHandler = async (data: newTicketType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(sendNewTicketHandler)}
      className=" p-[18px] mt-6 space-y-6"
    >
      <SelectBox
        register={register}
        errors={errors}
        name="department"
        options={departments}
        title="دپارتمان"
        selected={selected}
        onSelected={setSelected}
      />

      <SelectBox
        register={register}
        errors={errors}
        name="priority"
        options={priority}
        title="اولویت"
      />

      <Input
        register={register}
        errors={errors}
        placeholder="موضوع تیکت را وارد کنید"
        name={"title"}
        type={"text"}
        label="موضوع تیکت"
        className="text-right"
      />

      <Input
        register={register}
        errors={errors}
        placeholder="متن تیکت را تعریف کنید"
        name={"body"}
        type={"textarea"}
        label="متن تیکت"
      />

      <div className="flex items-center justify-end">
        <Button className="!w-[150px]">ارسال تیکت</Button>
      </div>
    </form>
  );
}

export default SendTicketForm;
