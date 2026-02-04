import { TRadioButton } from "@/libs/types";

function RadioButton({
  register,
  errors,
  options,
  name,
  labelName,
  className,
}: TRadioButton) {
  return (
    <div>
      <label className={`text-base ${className}`}>{labelName} : </label>
      <div className="flex items-center gap-x-4 mt-6 relative">
        {options.map((option, key) => (
          <div className="flex items-center gap-x-2" key={key}>
            <label htmlFor={option.label}>{option.label}</label>
            <input
              type="radio"
              name={name}
              {...register(`${name}`)}
              value={option.value}
              id={option.label}
              className="accent-black"
            />
          </div>
        ))}
        {errors[name] && (
          <span className="absolute top-[30px] text-xs md:text-sm text-red-600">
            {errors[name].message}
          </span>
        )}
      </div>
    </div>
  );
}

export default RadioButton;
