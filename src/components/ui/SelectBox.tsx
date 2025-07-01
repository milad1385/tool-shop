import { TSelectBox } from "@/libs/types";
import React from "react";
import Select from "react-select";

function SelectBox({
  title,
  register,
  errors,
  name,
  options,
  dateName,
  disable,
  multiple,
  selected,
  onSelected,
  placeholder = "placeholder",
}: TSelectBox) {
  if (!multiple) {
    return (
      <div className="flex w-full flex-col gap-y-3  relative">
        <label className="text-sm">{title}</label>

        <select
          disabled={disable}
          className="p-2 input border border-gray-300 text-black rounded-md w-full text-sm md:text-base"
          {...register(`${name}`)}
          name={name}
          onChange={(e) => onSelected?.(e.target.value)}
        >
          {dateName ? (
            <option value="">{dateName}</option>
          ) : (
            <option value="">گزینه مورد نظر را انتخاب کنید</option>
          )}
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {errors[name] && (
          <span className="absolute top-[80px] text-xs md:text-sm text-red-600">
            {errors[name].message}
          </span>
        )}
      </div>
    );
  } else {
    const handleSelectChange = (e: any) => {
      onSelected(e);
    };
    return (
      <div className="flex w-full flex-col gap-y-3  relative">
        <label htmlFor="">{title}</label>
        <div
          className={`  h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Select
            defaultValue={selected}
            className="w-full"
            isMulti={multiple}
            options={options}
            onChange={handleSelectChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

export default SelectBox;
