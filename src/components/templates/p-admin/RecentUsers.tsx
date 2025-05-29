import React from "react";
import { FaEye, FaTrash, FaUser } from "react-icons/fa6";

function RecentUser() {
  return (
    <div className="bg-namavaBlack rounded-md border border-gray-800 shadow py-4 md:py-6 px-3 md:px-6">
      <h2 className="text-lg md:text-xl pb-2 font-IranMedium">کاربران اخیر</h2>
      {true ? (
        <div className="overflow-hidden max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full mt-5 recent-table text-xs md:text-sm lg:text-base">
            <thead>
              <tr>
                <td>شماره</td>
                <td>پروفایل</td>
                <td>نام</td>
                <td>تاریخ</td>
                <td>رویداد ها</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-Dana">1</td>
                <td>
                  <img
                    src="/images/user.png"
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                    alt=""
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td className="font-Dana">12 خرداد 1403</td>
                <td className="flex items-center justify-center gap-x-4">
                  <FaTrash className="mt-2.5 text-red-700" />
                  <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
                </td>
              </tr>
              <tr>
                <td className="font-Dana">1</td>
                <td>
                  <img
                    src="/images/user.png"
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                    alt=""
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td className="font-Dana">12 خرداد 1403</td>
                <td className="flex items-center justify-center gap-x-4">
                  <FaTrash className="mt-2.5 text-red-700" />
                  <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
                </td>
              </tr>
              <tr>
                <td className="font-Dana">1</td>
                <td>
                  <img
                    src="/images/user.png"
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                    alt=""
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td className="font-Dana">12 خرداد 1403</td>
                <td className="flex items-center justify-center gap-x-4">
                  <FaTrash className="mt-2.5 text-red-700" />
                  <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
                </td>
              </tr>
              <tr>
                <td className="font-Dana">1</td>
                <td>
                  <img
                    src="/images/user.png"
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mx-auto"
                    alt=""
                  />
                </td>
                <td>میلاد سلامیان</td>
                <td className="font-Dana">12 خرداد 1403</td>
                <td className="flex items-center justify-center gap-x-4">
                  <FaTrash className="mt-2.5 text-red-700" />
                  <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-namava flex-center  lg:mt-[40px] flex-col gap-y-4 py-12 lg:py-16 text-white rounded-md shadow">
          <FaUser className="text-2xl md:text-3xl lg:text-4xl" />
          <p className="text-sm md:text-base">
            هیچ کاربری تا این تاریخ در سایت ثبت نام نکرده است
          </p>
        </div>
      )}
    </div>
  );
}

export default RecentUser;
