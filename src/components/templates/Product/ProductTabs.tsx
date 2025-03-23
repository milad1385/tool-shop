"use client";
import { useState } from "react";
import TabButton from "./TabButton";

function ProductTabs() {
  const [tab, setTab] = useState("details");
  return (
    <div className="bg-white p-6 rounded-2xl my-7">
      <div className="flex items-center gap-x-4 text-base md:text-xl font-Lalezar">
        <TabButton label="توضیحات" name="details" onTab={setTab} tab={tab} />
        <TabButton
          label="اطلاعات"
          name="information"
          onTab={setTab}
          tab={tab}
        />
        <TabButton label="نظر ها" name="comments" onTab={setTab} tab={tab} />
      </div>
      <div className="p-3 mt-5">
        {tab === "details" && (
          <p className="text-sm/[25px] md:text-base/[32px] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        )}{" "}
        
      </div>
    </div>
  );
}

export default ProductTabs;
