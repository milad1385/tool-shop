import { IFeatureList } from "@/libs/types";
import { useState } from "react";
import FeatureItem from "./FeatureItem";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";

function FeatureList({ features }: IFeatureList) {
  const [isMore, setIsMore] = useState(false);
  return (
    <div className="mt-6 flex flex-col gap-y-12">
      <div>
        <h4 className="flex  gap-x-2 font-DanaDemiBold">
          <LuNewspaper className="text-lg md:text-2xl text-zinc-700" />
          مشخصات کلی
        </h4>
        <ul className="features font-DanaMedium space-y-5 mt-5">
          {isMore
            ? features?.map((feature) => (
                <FeatureItem key={feature._id} feature={feature} />
              ))
            : features
                ?.slice(0, 4)
                .map((feature) => (
                  <FeatureItem key={feature._id} feature={feature} />
                ))}

          {features.length >= 3 && (
            <div className="flex items-center justify-center show-container relative">
              {isMore ? (
                <div
                  className="bg-yellow-500 font-Lalezar w-[120px] md:w-[130px] text-white flex items-center justify-between select-none p-2 rounded-md md:cursor-pointer"
                  onClick={() => setIsMore(false)}
                >
                  <span className="text-sm md:text-lg">نمایش کمتر</span>
                  <FaEyeSlash className="text-lg text-white" />
                </div>
              ) : (
                <div
                  className="bg-yellow-500 font-Lalezar w-[120px] md:w-[130px] text-white flex items-center justify-between select-none p-2 rounded-md md:cursor-pointer"
                  onClick={() => setIsMore(true)}
                >
                  <span className="text-sm md:text-lg">نمایش بیشتر</span>
                  <FaEye className="text-lg text-white" />
                </div>
              )}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FeatureList;
