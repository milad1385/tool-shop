import Image from "next/image";
import React from "react";
import { FaEye, FaTrash, FaUser } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

function RecentUser() {
  return (
    <div className="rounded-3xl bg-white  py-4 md:py-6 px-3 md:px-6">
      <h2 className="text-lg md:text-xl lg:text-2xl pb-2 font-Lalezar">
        کاربران اخیر
      </h2>
      {true ? (
        <div className="overflow-hidden max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full mt-5 recent-table text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="font-Lalezar text-lg text-zinc-700">
                <td>شماره</td>
                <td>پروفایل</td>
                <td>نام</td>
                <td>تاریخ</td>
                <td>رویداد ها</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Image
                    src="/images/user.jpg"
                    alt="user.jpg"
                    width={1920}
                    height={1080}
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td>12 خرداد 1403</td>
                <td>
                  <div className="flex items-center gap-x-3 justify-center">
                    <FaTrash className="-mt-1 text-red-700" />
                    <FaEye className="-mt-1 text-namava md:cursor-pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <Image
                    src="/images/user.jpg"
                    alt="user.jpg"
                    width={1920}
                    height={1080}
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td>12 خرداد 1403</td>
                <td>
                  <div className="flex items-center gap-x-3 justify-center">
                    <FaTrash className="-mt-1 text-red-700" />
                    <FaEye className="-mt-1 text-namava md:cursor-pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <Image
                    src="/images/user.jpg"
                    alt="user.jpg"
                    width={1920}
                    height={1080}
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td>12 خرداد 1403</td>
                <td>
                  <div className="flex items-center gap-x-3 justify-center">
                    <FaTrash className="-mt-1 text-red-700" />
                    <FaEye className="-mt-1 text-namava md:cursor-pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <Image
                    src="/images/user.jpg"
                    alt="user.jpg"
                    width={1920}
                    height={1080}
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td>12 خرداد 1403</td>
                <td>
                  <div className="flex items-center gap-x-3 justify-center">
                    <FaTrash className="-mt-1 text-red-700" />
                    <FaEye className="-mt-1 text-namava md:cursor-pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <Image
                    src="/images/user.jpg"
                    alt="user.jpg"
                    width={1920}
                    height={1080}
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td>12 خرداد 1403</td>
                <td>
                  <div className="flex items-center gap-x-3 justify-center">
                    <FaTrash className="-mt-1 text-red-700" />
                    <FaEye className="-mt-1 text-namava md:cursor-pointer" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex-center  lg:mt-[40px] flex-col gap-y-7 rounded-md">
          <LuUsers className="text-2xl md:text-3xl lg:text-[60px]" />
          <p className="text-sm md:text-base">
            هیچ کاربری تا این تاریخ در سایت ثبت نام نکرده است
          </p>
        </div>
      )}
    </div>
  );
}

export default RecentUser;
