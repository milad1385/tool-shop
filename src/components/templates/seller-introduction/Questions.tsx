import React from "react";
import Title from "./Title";
import { sellerQuestions } from "@/constants/data";
import Question from "./Question";

function Questions() {
  return (
    <div className="my-10 md:bg-gray-200 md:border border-gray-300 rounded-xl md:px-8 py-6">
      <Title content="سوالات شما" />
      <div className="space-y-4 mt-8">
        {sellerQuestions.map((question) => (
          <Question {...question} key={question.id} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
