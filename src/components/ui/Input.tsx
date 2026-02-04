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
  setImage,
  options,
}: IInput) {
  if (type === "text" || type === "number") {
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
          min={1}
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
        <label htmlFor={name} className="text-base md:text-lg text-zinc-800">
          {label} :
        </label>
        <textarea
          rows={8}
          {...register(`${name}`)}
          className={`input w-full resize-none  p-2 border border-gray-300 rounded-md ${className}`}
          placeholder={placeholder}
          id={name}
          name={name}
        ></textarea>
        {errors[name] && (
          <span className={`absolute -bottom-3 text-xs md:text-sm text-red-600`}>
            {errors[name].message}
          </span>
        )}
      </div>
    );
  } else if (type === "file") {
    return (
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor={name}
          className={`text-sm font-medium text-zinc-800 ${labelClassName}`}
        >
          {label} :{" "}
          {multiple && <span className="text-gray-500 text-xs">(چند عکس)</span>}
        </label>

        {/* بخش آپلود - از قابلیت multiple استفاده می‌کند */}
        <div className="relative flex flex-col items-center justify-center w-full p-8 transition-colors duration-300 bg-white border-2 border-dashed rounded-xl border-slate-300 hover:border-yellow-500 group">
          <div className="absolute inset-0 transition-colors duration-300 bg-yellow-50 group-hover:bg-yellow-100 opacity-50"></div>

          <div className="relative z-10 text-center">
            {/* SVG icon */}
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
              {...register(`${name}`, {
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files.length > 0) {
                    if (multiple) {
                      setImage(Array.from(e.target.files));
                    } else {
                      const file = e.target.files[0];
                      const objUrl = URL.createObjectURL(file);
                      setImage(objUrl);
                    }
                  }
                },
              })}
              id={name}
              name={name}
              type="file"
              disabled={disable}
              className="sr-only"
              accept="image/*"
              // 👈 فعال سازی آپلود چندگانه
              multiple={multiple}
            />
          </div>
        </div>

        {/* بخش پیش نمایش زنده عکس‌ها */}

        {errors[name] && (
          <span className="text-sm text-red-600">{errors[name].message}</span>
        )}
      </div>
    );
  } else if (type === "select") {
    return (
      <div className="relative flex flex-col gap-y-2">
        <label
          htmlFor={name}
          className={`text-sm font-medium text-zinc-700 ${labelClassName}`}
        >
          {label} :
        </label>
        <div className="relative">
          <select
            {...register(`${name}`)}
            id={name}
            name={name}
            disabled={disable}
            defaultValue=""
            className={`appearance-none input mt-[8px] w-full bg-white text-right p-2 border border-gray-300 rounded-md  transition duration-300 ${className}`}
          >
            {/* Add your options here */}
            <option value="" disabled>
              {placeholder || "یک گزینه را انتخاب کنید"}
            </option>
            {/* Example options: */}
            {options?.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute top-2 inset-y-0 left-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        {errors[name] && (
          <span className="absolute -bottom-5 text-xs text-red-600">
            {errors[name].message}
          </span>
        )}
      </div>
    );
  } else if (type === "color") {
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
          className={`input w-full h-[40px] p-2 text-right  border border-gray-300 rounded-md ${className}`}
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
  }
}

export default Input;
