import Image from "next/image";
import SellersCommentList from "./SellersCommentList";
import Title from "./Title";

function SellersComment() {
  return (
    <div className="container">
      <Title content="داستان‌های موفقیت از زبان فروشندگان" />
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-12 lg:col-span-7 border border-gray-300 p-2 rounded-xl">
          <Image
            alt="image"
            src="/images/blog-3.jpg"
            width={1920}
            height={1080}
            className="w-[700px] lg:h-[390px] rounded-md"
          />
        </div>
        <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
            <SellersCommentList/>
        </div>
      </div>
    </div>
  );
}

export default SellersComment;
