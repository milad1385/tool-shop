import { taxCategories } from "@/constants/data";
import TaxCategory from "./TaxCategory";
import Title from "./Title";

function TaxInCategories() {
  return (
    <div className="bg-gray-50 mt-12">
      <div className="container">
        <div className="py-6 md:py-10 lg:grid grid-cols-12 gap-y-10 gap-x-28 px-0 md:px-8 space-y-10">
          <div className="lg:col-span-5">
            <Title content="میزان کمیسیون در هر دسته‌بندی" />
            <p className="text-justify text-zinc-700 text-sm/[28px] md:text-base/[32px] mt-3 whitespace-normal break-words">
              با ترازو دیگر نیازی به پرداخت اجاره فروشگاه، طراحی سایت، دریافت
              پنل و... ندارید! تنها هزینه‌ای اندک برای استفاده از خدمات ترازو و
              کمیسیون می‌پردازید. میزان کمیسیون متناسب با دسته‌بندی کالا تعیین
              می‌شود. اینجا می‌توانید میزان کمیسیون هر دسته‌بندی را با جزئیات
              ببینید
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-9">
            {taxCategories.map((category) => (
              <TaxCategory key={category.id} {...category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxInCategories;
