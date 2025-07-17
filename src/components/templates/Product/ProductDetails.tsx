import React from "react";
import AddToCart from "./AddToCart";
import { FaRegCreditCard } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { PiPaperPlaneRight } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import ColorBoxes from "@/components/modules/main/ColorBoxes";

function ProductDetails() {
  return (
    <div className="col-span-12 md:col-span-8">
      <div className="p-4">
        <div className="bg-stone-50 rounded-xl p-4 leading-8">
          <h1 className="text-lg lg:text-xl font-Lalezar">
            دریل شارژِ مدل رونیکس
          </h1>
          <p className="text-sm md:text-[15px] mt-2">دسته بندی: دریل ها</p>
        </div>
        <div className="grid grid-cols-12 mt-4">
          <div className="col-span-12 lg:col-span-8 p-4">
            <ul className="leading-8 text-stone-500">
              <li>ولتاژ : 18 ولت</li>
              <li>منبع تغذیه : باتری</li>
              <li>مدل : رونیکس</li>
              <li>وزن : 250 گرم</li>
              <li>ابعاد : 60 در 40</li>
              <li>اقلام : دفترچه</li>
            </ul>
            <div className="flex gap-4 text-base mt-4">
              <span className="line-through">360.000 تومان</span>
              <span className="text-yellow-500">280.000 تومان</span>
            </div>
            <div className="flex items-start flex-col gap-2">
              <AddToCart />

              <ColorBoxes/>

              <button className="block border px-4 py-2 rounded-xl">
                افزودن به مقایسه
              </button>
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
