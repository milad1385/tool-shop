import Accordion from "@/components/modules/main/Accordion";
import { ISellerQuestions } from "@/libs/types";
import React from "react";

function Question({ question, answer, id }: ISellerQuestions) {
  return (
    <Accordion className="!bg-white md:!bg-gray-100" title={question}>
      {answer}
    </Accordion>
  );
}

export default Question;
