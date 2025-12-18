import React from "react";
import Title from "./Title";
import { FaRegUser } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import RequiredDocument from "./RequiredDocument";

function RequiredDocuments() {
  return (
    <div>
      <Title content="مدارک مورد نیاز" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3 bg-gray-50 py-5 md:py-8 mt-5 md:mt-10 rounded-md">
        <RequiredDocument
          title="فرد حقیقی"
          description="تصویر کارت ملی یا کارت شناسایی معتبر"
          icon={<FaRegUser className="text-2xl md:text-3xl" />}
        />
        <RequiredDocument
          title="فرد حقوقی"
          description="تصاویر ثبت‌نام در وب‌سایت «evat.ir»، روزنامه رسمی شرکت و کارت ملی صاحبین امضا"
          icon={<BsShop className="text-2xl md:text-3xl" />}
        />
      </div>
    </div>
  );
}

export default RequiredDocuments;
