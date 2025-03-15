import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import SalesProductSlider from "./SalesProductSlider";
import Title from "@/components/modules/Title";

function SalesProducts() {
  return (
    <div className="my-10 bg-[#eab308] rounded-lg px-5 py-8">
      <Title title="پیشنهاد شگفت انگیز" />
      <div className="grid grid-cols-12 gap-[15px]">
        <SalesProductSlider />
        <div className="col-span-3 bg-[#292524] shadow rounded-3xl overflow-hidden px-4 py-8 hidden lg:flex flex-col justify-between">
          <h3 className="text-white text-center text-base/[28px]">
            با 30 درصد تخفیف شگفتانه محصول خود را خریداری کنید :)
          </h3>
          <Image
            width={1920}
            height={1080}
            src="/images/off.png"
            alt="off pic"
            className="w-48 mx-auto"
          />
          <h3 className="text-white text-center text-base/[28px]">
            تخفیف شگفت انگیز فروشگاه ابزار ترازو
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SalesProducts;
