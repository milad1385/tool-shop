"use client";
import Input from "@/components/ui/Input";
import {
    sendContact,
    sendContactType,
} from "@/validators/frontend/contact.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function SendContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(sendContact),
  });

  const sendNewContact = async (data: sendContactType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(sendNewContact)}
      className="flex flex-col gap-y-5  bg-white w-[100%] md:w-[420px] p-8 shadow rounded-md"
    >
      <Input
        register={register}
        errors={errors}
        name="email"
        type="text"
        label="ایمیل"
        className="bg-gray-50"
        disable={false}
        labelClassName="md:!text-lg font-Iran"
      />
      <Input
        register={register}
        errors={errors}
        name="username"
        type="text"
        label="نام و نام خانوادگی"
        className="bg-gray-50"
        disable={false}
        labelClassName="md:!text-lg font-Iran"
      />
      <Input
        register={register}
        errors={errors}
        name="message"
        type="textarea"
        label="متن پیغام"
        className="bg-gray-50"
        disable={false}
        labelClassName="md:!text-lg font-Iran"
      />
      <button className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4">
        ارسال
      </button>
    </form>
  );
}

export default SendContactForm;
