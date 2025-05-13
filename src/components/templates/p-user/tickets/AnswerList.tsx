import React from "react";
import AnswerBox from "./AnswerBox";

function AnswerList() {
  return (
    <div className="space-y-4">
      <AnswerBox isFromUserPanel={true} />
      <AnswerBox />
      <AnswerBox />
      <AnswerBox />
    </div>
  );
}

export default AnswerList;
