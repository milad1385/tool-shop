import { IFeatureItem } from "@/libs/types";

function FeatureItem({ feature: { name, value } }: IFeatureItem) {
  return (
    <li className="flex items-center gap-x-2 pr-4 border-r-2  border-r-yellow-500">
      <span className="py-2 text-zinc-700 w-[180px] text-xs md:text-base">
        {name}
      </span>
      <span className="block text-xs md:text-base bg-gray-200 w-full py-3 md:py-[18px] px-[14px] rounded-lg text-gray-500">
        {value}
      </span>
    </li>
  );
}

export default FeatureItem;
