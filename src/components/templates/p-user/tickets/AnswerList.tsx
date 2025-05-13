import React from "react";
import AnswerBox from "./AnswerBox";
import SendAnswerToTicket from "./SendAnswerToTicket";

function AnswerList() {
  return (
    <>
      <div className="space-y-4">
        <AnswerBox isFromUserPanel={true} />
        <AnswerBox />
        <AnswerBox />
        <AnswerBox />
      </div>
      <SendAnswerToTicket />
    </>
  );
}

export default AnswerList;
