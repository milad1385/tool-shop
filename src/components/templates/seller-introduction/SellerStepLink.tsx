import { ISellerStepLink } from "@/libs/types";
import { MdLockOutline } from "react-icons/md";

function SellerStepLink({ title, icon, options, isActive }: ISellerStepLink) {
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <div className={`w-[40px] h-[40px] flex-center ${isActive ? "bg-yellow-500" :"bg-gray-400"} rounded-full`}>
          {isActive ? icon : <MdLockOutline className="text-2xl text-white" />}
        </div>
        <span>{title}</span>
      </div>
      <div className="pr-7 mt-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={`flex items-center gap-x-2 p-3 border-r-2 ${
              option.isActive === true
                ? "border-yellow-500 bg-yellow-500/25"
                : "border-gray-400 text-gray-500"
            } `}
          >
            {option.icon}
            <span className="text-sm">{option.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellerStepLink;
