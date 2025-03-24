import React from "react";
import Comment from "./Comment";
import { GoChevronDown } from "react-icons/go";

function CommentList() {
  return (
    <div className="space-y-8">
      <Comment />
      <Comment />
      <button className="flex items-center gap-x-2 border text-yellow-500 border-yellow-500 rounded-md mx-auto px-4 py-2 hover:bg-yellow-50 transition-all">
        <p>مشاهده بیشتر</p>
        <GoChevronDown className="text-lg" />
      </button>
    </div>
  );
}

export default CommentList;
