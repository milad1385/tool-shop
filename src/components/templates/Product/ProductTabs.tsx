"use client";
import { useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";
import FeatureList from "./FeatureList";
import Comments from "./Comments";

function ProductTabs() {
  const [tab, setTab] = useState("details");

  const feaures = [
    { _id: 1, name: "شرکت سازنده", value: "نیروگشت" },
    { _id: 2, name: "جهت چرخش", value: "دو جهته" },
    { _id: 3, name: "محتویات در جعبه", value: "دفترچه راهنما" },
  ];
  return (
    <div className="bg-white p-6 rounded-2xl my-7">
      <div className="flex items-center gap-x-4 text-base md:text-xl font-Lalezar border-b-2 border-gray-200 pb-4">
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
            <p className="text-sm/[25px] md:text-base/[32px] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <Image
              src="/images/product-1.jpg"
              alt="product-1.jpg"
              width={1920}
              height={1080}
              className="w-[250px] mx-auto md:w-[350px]"
            />
          </div>
        )}{" "}
        {tab === "information" && <FeatureList features={feaures} />}
        {tab === "comments" && <Comments />}
      </div>
    </div>
  );
}

export default ProductTabs;
