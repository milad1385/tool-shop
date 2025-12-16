import { ITrazoItem } from "@/libs/types";

function TrazoItem({ title, description, icon }: ITrazoItem) {
  return (
    <div className="space-y-4">
      {icon}
      <h5 className="font-bold">{title}</h5>
      <span className="block h-[2.35px] bg-gray-300 w-20 mt-5"></span>
      <p className="text-[13px]">{description}</p>
    </div>
  );
}

export default TrazoItem;
