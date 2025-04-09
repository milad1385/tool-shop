import QuetionSearchInput from "@/components/templates/question/QuetionSearchInput";
import Image from "next/image";

function page() {
  return (
    <>
      <section>
        <div className="relative flex justify-center items-center select-none">
          <Image
            src="/images/bg-question.jpg"
            alt="question-image"
            width={1920}
            height={1080}
            className="object-cover lg:h-auto h-60"
          />
          <QuetionSearchInput />
        </div>
      </section>
    </>
  );
}

export default page;
