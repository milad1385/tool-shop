import { useState } from "react";
import { BsChatSquareText, BsExclamationTriangle } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";

function Comments() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <IoIosChatboxes className="text-yellow-500 text-[40px]" />
          <span className="font-Lalezar text-2xl">نظرات</span>
        </div>
        <button
        disabled={isShow}
          onClick={() => setIsShow(true)}
          className="bg-yellow-500 text-white flex items-center p-2 rounded-md gap-x-2"
        >
          <span>ایجاد نظر جدید</span>
          <BsChatSquareText className="text-white" />
        </button>
      </div>

      <div className="flex items-center gap-x-4 mt-5">
        <div className="flex-center w-14 h-14 p-1 border border-gray-300  rounded-full">
          <div className="bg-gray-200 rounded-full w-12 h-12 flex-center">
            <FaUser className="text-lg text-zinc-500" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-base font-IranMedium">میلاد سلامیان</span>
          <span className="font-dana text-sm text-gray-700">ثبت نظر جدید</span>
        </div>
      </div>

      {!isShow ? (
        <div className="bg-yellow-50 md:font-bold text-yellow-500  p-4 md:p-5 rounded-xl text-sm/[28px] mb-6 flex w-full lg:w-[65%] mt-5">
          کاربر عزیز ، سوالات فنی در این بخش تایید و پاسخ نخواهد داده شد ، این
          دسته از سوالات را در بخش تیکت های سایت از کارشناسان ما بپرسید ، تشکر .
        </div>
      ) : (
        <div className="w-full lg:w-[65%] mt-5">
          <div className="flex items-center gap-x-1 md:gap-x-2 text-sm bg-red-600 text-white px-4 py-3 rounded-xl mb-3">
            <BsExclamationTriangle className="text-lg md:text-xl" />
            <span>
              لطفا پرسش مربوط به محصول را در صفحه همان محصول مطرح کنید.
            </span>
          </div>
          <div className="mt-5">
            <textarea
              className="w-full h-[180px] bg-gray-100 p-4 rounded-xl outline-none text-sm font-bold"
              placeholder="نظر خود را بنویسید ..."
            />
            <div className="flex gap-x-4 justify-end mt-4.5 sm:mt-6">
              <button
                onClick={() => setIsShow(false)}
                className="flex-grow sm:grow-0 sm:w-36 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-50 transition-all"
              >
                لغو
              </button>
              <button className="flex-grow sm:grow-0 sm:w-36 bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition-all">
                ارسال
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;
