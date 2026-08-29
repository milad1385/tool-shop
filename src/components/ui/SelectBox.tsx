import { customStyles } from "@/constants/data";
import { TSelectBox } from "@/libs/types";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[42px] animate-pulse bg-gray-200 rounded-md" />
  ),
});

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
  className,
  searchable,
  noOptionMsg,
  defaultValue,
}: TSelectBox) {
  const getDefaultValue = () => {
    if (selected) return selected;
    if (defaultValue) {
      if (Array.isArray(defaultValue)) {
        return options.filter((opt) => defaultValue.includes(opt.value));
      }
      return options.find((opt) => opt.value === defaultValue);
    }
    return null;
  };
  if (!multiple && !searchable) {
    return (
      <div className="flex w-full flex-col gap-y-3  relative">
        <label className={`text-sm ${className}`}>{title}</label>

        <select
          disabled={disable}
          className={`p-2 input border border-gray-300 text-black rounded-md w-full text-sm md:text-base ${className}`}
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
    const handleSelectChange = (e: unknown) => {
      onSelected(e);
    };
    return (
      <div className="flex w-full flex-col gap-y-3  relative">
        <label htmlFor="">{title}</label>
        <div
          className={`  h-[52px]  rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Select
            defaultValue={getDefaultValue()}
            className="w-full"
            classNamePrefix="react-select"
            isMulti={multiple}
            noOptionsMessage={() => "موردی یافت نشد"}
            options={options}
            {...register(`${name}`)}
            onChange={handleSelectChange}
            placeholder={placeholder}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 14,
              colors: {
                ...theme.colors,
                primary: "#121212",
                primary25: "#1a1a2e",
                primary50: "#121212",
                neutral0: "#000000",
                neutral5: "#1a1a2e",
                neutral10: "#2a2a4e",
                neutral20: "#333333",
                neutral30: "#444444",
                neutral40: "#888888",
                neutral50: "#aaaaaa",
                neutral80: "#ffffff",
              },
            })}
          />
        </div>
      </div>
    );
  }
}

export default SelectBox;
