import { IAnswerBox } from "@/libs/types";
import React from "react";

function AnswerBox({
  body = "سلام چطوری میتونم اشتراک بگیرم عمو میلاد ؟",
  creator = "میلاد سلامیان",
  createdAt = 1200,
  isFromUserPanel = false,
}: IAnswerBox) {
  return (
    <div
      className={`w-11/12 sm:w-2/3  ${
        isFromUserPanel
          ? "bg-gray-100 text-zinc-700 "
          : "bg-blue-600 text-white mr-auto"
      }   p-4 rounded-2xl ${isFromUserPanel ? "rounded-tr-sm" :"rounded-tl-sm"}`}
    >
      <h4
        className={`font-dana text-sm md:text-lg mb-1 ${
          isFromUserPanel ? "text-right" : "text-left"
        }`}
      >
        {creator}
      </h4>
      <span
        className={`block text-xs font-dana  ${

          isFromUserPanel ? "text-right" : "text-left"
        }`}
      >
        {new Date(createdAt).toLocaleString("fa")}
      </span>
      <p className="font-Dana mt-4 !text-sm md:!text-base">{body}</p>
    </div>
  );
}

export default AnswerBox;
