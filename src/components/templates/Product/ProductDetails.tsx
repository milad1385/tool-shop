import ColorBoxes from "@/components/modules/main/ColorBoxes";
import { FaRegCreditCard } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiPaperPlaneRight } from "react-icons/pi";
import AddToCart from "./AddToCart";
import FactorItem from "./FactorItem";

function ProductDetails() {
  return (
    <div className="col-span-12 md:col-span-8">
      <div className="px-1 py-3 md:py-4 md:px-4">
        <div className="bg-stone-50 rounded-xl p-4 leading-8">
          <h1 className="text-lg lg:text-xl font-Lalezar">
            دریل شارژِ مدل رونیکس
          </h1>
          <p className="text-sm md:text-[15px] mt-2">دسته بندی: دریل ها</p>
        </div>
        <div className="grid grid-cols-12 mt-4">
          <div className="col-span-12 lg:col-span-8 px-1 py-2 md:py-4 md:px-3">
            <div>
              <h3 className="text-xl font-Lalezar">مشخصات کالا</h3>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <FactorItem />
                <FactorItem />
                <FactorItem />
                <FactorItem />
                <FactorItem />
                <FactorItem />
              </div>
            </div>
            <div className="flex gap-4 text-base mt-4">
              <span className="line-through">360.000 تومان</span>
              <span className="text-yellow-500">280.000 تومان</span>
            </div>
            <div className="flex items-start flex-col gap-2 pt-8 md:pt-0">
              <div className="hidden md:block">
                <AddToCart />
              </div>

              <ColorBoxes />

              <button className="block border px-4 py-2 md:py-3 rounded-lg w-full md:w-[180px]">
                افزودن به مقایسه
              </button>
              <div className="block md:hidden w-full">
                <AddToCart />
              </div>
            </div>
          </div>
          <div className="hidden lg:block col-span-4">
            <div className="flex items-center border rounded-lg my-2 p-2">
              <FaRegCreditCard className="text-xl text-yellow-500" />
              <span className="mr-2">بهترین قیمت</span>
            </div>
            <div className="flex items-center border rounded-lg my-2 p-2">
              <IoKeyOutline className="text-2xl text-yellow-500" />
              <span className="mr-2">تضمین اصل بودن محصول</span>
            </div>
            <div className="flex items-center border rounded-lg my-2 p-2">
              <PiPaperPlaneRight className="text-2xl text-yellow-500" />
              <span className="mr-2">ارسال سریع</span>
            </div>
            <div className="flex items-center border rounded-lg my-2 p-2">
              <MdOutlineSupportAgent className="text-2xl text-yellow-500" />
              <span className="mr-2">مشاوره قبل از خرید</span>
            </div>
            <div className="flex items-center border rounded-lg my-2 p-2">
              <FiGift className="text-2xl text-yellow-500" />
              <span className="mr-2">بسته بندی زیبا</span>
            </div>
            <div className="flex items-center border rounded-lg my-2 p-2">
              <FaRegFaceSmile className="text-xl text-yellow-500" />
              <span className="mr-2">رضایت کاربران</span>
            </div>
            <div className="flex items-center border rounded-lg my-2 p-2">
              <IoMdCheckmark className="text-xl text-yellow-500" />
              <span className="mr-2">تایید فروشنده توسط ترازو</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
