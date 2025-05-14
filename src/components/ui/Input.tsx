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
}: IInput) {
  if (type !== "textarea" && type !== "file") {
    return (
      <div className="flex flex-col gap-y-4 relative">
        <label htmlFor={name} className="text-sm text-zinc-800">
          {label} :
        </label>
        <input
          {...register(`${name}`)}
          type={type}
          id={name}
          name={name}
          dir="ltr"
          disabled={disable}
          placeholder={placeholder}
          className={`input text-left p-2 border border-gray-300 rounded-md ${className}`}
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
  } else {
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
  }
}

export default Input;
