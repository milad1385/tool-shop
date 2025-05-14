"use client";

import Input from "@/components/ui/Input";
import SelectBox from "@/components/ui/SelectBox";
import {
  newTicketSchema,
  newTicketType,
} from "@/validators/frontend/tickets/ticket.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SendTicketForm() {
  const [selected, setSelected] = useState(null);
  const priority = [
    { id: 1, value: 1, label: "بسیار بالا" },
    { id: 2, value: 2, label: "بالا" },
    { id: 3, value: 3, label: "متوسط" },
  ];

  const departments = [
    { id: 1, value: 1, label: "مالی" },
    { id: 2, value: 2, label: "پشتیبانی" },
    { id: 3, value: 3, label: "رسیدگی" },
  ];
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newTicketSchema),
  });

  console.log(errors);
  

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
        <button type="submit" className="bg-amber-500 px-4 py-2 text-white rounded-md">
          ارسال
        </button>
      </div>
    </form>
  );
}

export default SendTicketForm;
