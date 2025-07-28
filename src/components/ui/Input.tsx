import { IInput } from "@/libs/types";
import React from "react";

function Input({
  label,
  type,
  name,
  className,
  errors,
  register,
  disable,
  multiple,
  placeholder,
  labelClassName,
}: IInput) {
  if (type !== "textarea" && type !== "file") {
    return (
      <div className="flex flex-col gap-y-4 relative">
        <label
          htmlFor={name}
          className={`text-sm text-zinc-800 ${labelClassName}`}
        >
          {label} :
        </label>
        <input
          {...register(`${name}`)}
          type={type}
          id={name}
          name={name}
          disabled={disable}
          placeholder={placeholder}
          className={`input text-right p-2 border border-gray-300 rounded-md ${className}`}
        />

        {errors[name] && (
          <span
            className={`absolute -bottom-6  text-xs md:text-sm text-red-600`}
          >
            {errors[name].message}
          </span>
        )}
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div className="flex flex-col gap-y-4 relative">
        <label htmlFor={name} className="text-sm text-zinc-800">
          {label} :
        </label>
        <textarea
          rows={8}
          {...register(`${name}`)}
          className={`input w-full  p-2 border border-gray-300 rounded-md ${className}`}
          placeholder={placeholder}
          id={name}
          name={name}
        ></textarea>
        {errors[name] && (
          <span className={`text-xs md:text-sm text-red-600`}>
            {errors[name].message}
          </span>
        )}
      </div>
    );
  } else if(type ==="file") {
    return (
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor={name}
          className={`text-sm font-medium text-zinc-800 ${labelClassName}`}
        >
          {label} :
        </label>

        <div className="relative flex flex-col items-center justify-center w-full p-8 transition-colors duration-300 bg-white border-2 border-dashed rounded-xl border-slate-300 hover:border-yellow-500 group">
          <div className="absolute inset-0 transition-colors duration-300 bg-yellow-50 group-hover:bg-yellow-100 opacity-50"></div>

          <div className="relative z-10 text-center">
            <svg
              className="w-16 h-16 mx-auto text-slate-400 group-hover:text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 17.25z"
              />
            </svg>


            <p className="mt-4 text-lg font-medium text-slate-700">
              فایل خود را{" "}
              <label
                htmlFor={name}
                className="font-bold text-yellow-500 cursor-pointer hover:underline"
              >
                اینجا
              </label>{" "}
              آپلود کنید
            </p>

            <p className="mt-1 text-sm text-slate-500">
              میتوانید از دایرکتوری فایل خود را انتخاب کنید
            </p>

            <input
              {...register(`${name}`)}
              id={name}
              name={name}
              type="file"
              disabled={disable}
              className="sr-only"
            />
          </div>
        </div>

        {errors[name] && (
          <span className="text-sm text-red-600">{errors[name].message}</span>
        )}
      </div>
    );
  }
}

export default Input;
