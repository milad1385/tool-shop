import { ICheckbox } from "@/libs/types";

function Checkbox({ label, slug , onChange , selected}: ICheckbox) {
  
  return (
    <label className="flex items-center cursor-pointer justify-between">
      <input
       onChange={onChange}
        type="checkbox"
        className="peer hidden"
        value={slug}
        checked={selected}
      />
      <span className="ml-2 text-[15px] text-gray-800">{label}</span>
      <div className="w-5 h-5 border-2 border-yellow-500 rounded-sm transition-colors peer-checked:bg-yellow-300" />
    </label>
  );
}

export default Checkbox;
