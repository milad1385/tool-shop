import Accordion from "@/components/modules/main/Accordion";
import QuetionSearchInput from "@/components/templates/question/QuetionSearchInput";
import Image from "next/image";

function page() {
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
        <Accordion title="فرم ها را چگونه می توانم دانلود کنم؟">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </Accordion>
        <Accordion title="چگونه اکانت خود را بازیابی کنیم؟">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </Accordion>
        <Accordion title="آیا برای سفارش خدمات تماس بگیریم؟">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </Accordion>
        <Accordion title="چگونه مشاوره رایگان دریافت کنیم؟">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </Accordion>
      </div>
    </>
  );
}

export default page;
