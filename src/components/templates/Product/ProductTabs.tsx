"use client";
import { useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";
import FeatureList from "./FeatureList";
import Comments from "./Comments";
import { IProduct } from "@/libs/types";

function ProductTabs({
  name,
  description,
  images,
  customFeatures,
  features,
}: IProduct) {
  const [tab, setTab] = useState("details");

  // const feaures = [
  //   { _id: 1, name: "شرکت سازنده", value: "نیروگشت" },
  //   { _id: 2, name: "جهت چرخش", value: "دو جهته" },
  //   { _id: 3, name: "محتویات در جعبه", value: "دفترچه راهنما" },
  // ];
  return (
    <div className="bg-white px-5 py-4 md:p-6 rounded-2xl my-7">
      <div className="flex items-center gap-x-4 text-base md:text-xl font-Lalezar border-b-2 border-gray-200 pb-3 md:pb-4">
        <TabButton label="توضیحات" name="details" onTab={setTab} tab={tab} />
        <TabButton
          label="اطلاعات"
          name="information"
          onTab={setTab}
          tab={tab}
        />
        <TabButton label="نظر ها" name="comments" onTab={setTab} tab={tab} />
      </div>
      <div className="p-1 mt-5">
        {tab === "details" && (
          <div>
            <p className="text-sm/[28px] md:text-base/[32px] text-justify">
              {description}
            </p>
            <Image
              src={images[0]}
              alt={name}
              width={1920}
              height={1080}
              className="w-[250px] mx-auto md:w-[350px] mt-10"
            />
          </div>
        )}
        {tab === "information" && (
          <>
            <FeatureList features={features} title="ویژگی ها" />
            <FeatureList features={customFeatures} title="مشخصات ویژه" />
          </>
        )}
        {tab === "comments" && <Comments />}
      </div>
    </div>
  );
}

export default ProductTabs;
