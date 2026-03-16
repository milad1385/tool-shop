import React from "react";

function ProgressDeliverOrder() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-x-1 text-green-600 font-DanaMedium mt-6">
        <span>🚚</span>
        <span className={`text-sky-500 font-Lalezar text-lg`}>
          در حال ارسال
        </span>
      </div>

      <div className="w-full mt-4 flex flex-row-reverse bg-gray-100 rounded-full">
        <div className={`bg-sky-500 py-1.5 rounded-full w-[50%]`}></div>
      </div>
    </div>
  );
}

export default ProgressDeliverOrder;
