import ForgotForm from "@/components/templates/auth/ForgotForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "فراموشی رمز عبور",
  description:
    "با وارد کردن ایمیل خودتان رمز عبورتان را با دریافت ایمیل تایید تغییر دهید",
  openGraph: {
    title: "صفحه فراموشی رمز عبور",
  },
};

function page() {
  return (
    <section className="h-screen md:px-4 flex items-center">
      <div className="container mx-auto max-w-screen-lg">
        <div className="bg-white shadow rounded-2xl overflow-hidden">
          <div className="flex flex-col items-center md:flex-row gap-8">
            <div className="flex-1 p-8 md:p-4 lg:p-16 lg:pb-0">
              <h2 className="text-center text-2xl lg:text-4xl font-Lalezar">
                صفحه فراموشی رمز عبور
              </h2>
              <ForgotForm />
              <div className="flex flex-col gap-y-2 mt-5">
                <Link href="/auth/register" className="text-center text-sm">
                  حساب کاربری ندارید ؟
                </Link>
                <div className="divider my-8">
                  <span className="px-2 text-sm">یا</span>
                </div>
                <Link href="/auth/login" className="text-center text-sm">
                  حساب کاربری دارید ؟
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                className="bg-cover max-w-[413px]"
                src="/images/auth/login.jpg"
                alt="login image page"
                width={1920}
                height={1080}
                quality={80}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
