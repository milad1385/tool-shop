import Image from "next/image";
import React from "react";
import RecentArticleBox from "./RecentArticleBox";

function RecentArticles() {
  return (
    <div className="bg-white p-4 rounded-3xl mb-4 leading-8">
      <div className="border-r-4 bg-slate-100 border-yellow-400 mb-4 rounded-xl p-4">
        <h3 className="font-Lalezar text-xl text-slate-800 ">
          پربازدیدترین ها
        </h3>
      </div>

      <ul className="space-y-4">
        <RecentArticleBox/>
        <RecentArticleBox/>
        <RecentArticleBox/>
        <RecentArticleBox/>
      </ul>
    </div>
  );
}

export default RecentArticles;
