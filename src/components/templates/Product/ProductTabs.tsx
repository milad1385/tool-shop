"use client";
import { useState } from "react";
import TabButton from "./TabButton";

function ProductTabs() {
  const [tab, setTab] = useState("details");
  return (
    <div className="bg-white p-4 rounded-2xl my-7">
      <div className="flex items-center gap-x-4 text-lg md:text-xl font-Lalezar">
        <TabButton label="توضیحات" name="details" onTab={setTab} tab={tab} />
        <TabButton
          label="اطلاعات"
          name="information"
          onTab={setTab}
          tab={tab}
        />
        <TabButton label="نظر ها" name="comments" onTab={setTab} tab={tab} />
      </div>
    </div>
  );
}

export default ProductTabs;
