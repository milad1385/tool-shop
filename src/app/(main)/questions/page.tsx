import Accordion from "@/components/modules/main/Accordion";
import QuetionSearchInput from "@/components/templates/question/QuetionSearchInput";
import { getAllQuestions } from "@/services/question.service";
import Image from "next/image";

async function page() {
  const questions = await getAllQuestions();
  return (
    <>
      <section className="relative flex justify-center items-center select-none">
        <Image
          src="/images/bg-question.jpg"
          alt="question-image"
          width={1920}
          height={1080}
          className="object-cover lg:h-auto h-60"
        />
        <QuetionSearchInput />
      </section>
      <div className="mt-10 space-y-5 container">
        {questions.map((questionItem) => (
          <Accordion key={questionItem._id} title={questionItem.question}>
            {questionItem.answer}
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default page;
