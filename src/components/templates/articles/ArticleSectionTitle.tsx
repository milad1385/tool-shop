import { ITArticleSectionTitle } from "@/libs/types";
import React from "react";

function ArticleSectionTitle({title} : ITArticleSectionTitle) {
  return (
    <div className="border-r-4 bg-slate-100 border-yellow-400 mb-4 rounded-xl p-4">
      <h3 className="font-Lalezar text-lg md:text-xl text-slate-800 ">{title}</h3>
    </div>
  );
}

export default ArticleSectionTitle;
