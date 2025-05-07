import React from "react";
import CommentItem from "./CommentItem";

function CommentList() {
  return (
    <div className="space-y-4">
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
}

export default CommentList;
