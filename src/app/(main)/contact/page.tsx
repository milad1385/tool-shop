import Title from "@/components/modules/main/Title";
import React from "react";

function page() {
  return (
    <div className="mt-24 md:mt-48 flex items-center justify-center flex-col container">
      <Title title="پیغام خود را ارسال کنید" className="!text-3xl" />
      <form
        action="#"
        className="flex flex-col gap-y-5  bg-white w-[400px] p-8 shadow rounded-md"
      >
        <div className="flex flex-col gap-y-4">
          <label htmlFor="email" className="text-sm text-zinc-800">
            ایمیل
          </label>
          <input
            type="text"
            id="email"
            name="email"
            dir="ltr"
            className="input text-left p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="name" className="text-sm text-zinc-800">
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input  p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="content" className="text-sm text-zinc-800">
            متن پیغام
          </label>
          <textarea
            id="content"
            name="content"
            className="input  p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4">
          ارسال
        </button>
      </form>
    </div>
  );
}

export default page;
