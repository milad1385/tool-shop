"use client"
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";
import dynamic from "next/dynamic";
const MapBranches = dynamic(() => import("./MapBranches"), { ssr: false });

function Branches() {
  return (
    <div className="bg-yellow-600">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 py-7 lg:py-20 container  px-8  md:px-12">
          <h2 className="text-white text-lg lg:text-xl font-bold">
            ارسال کالا به روش‌های مختلف
          </h2>
          <div className="text-white text-justify text-sm/[28px] md:text-lg/[32px] mt-5 lg:flex flex-wrap items-center">
            <span>
              اگر استان شما هنوز انبار ترازو ندارد، نگران نباشید! شما می‌توانید
              از امکان
            </span>
            <FaRegUserCircle className="text-xl mx-1 hidden lg:block" />
            <span>«ارسال توسط فروشنده» استفاده کنید یا کالای خود را به</span>
            <HiOutlineTruck className="text-xl mx-1 hidden lg:block" />
            <span>«انبار سیار» ترازو در استان خود تحویل دهید.</span>
          </div>
        </div>
        <MapBranches/>
      </div>
    </div>
  );
}

export default Branches;
