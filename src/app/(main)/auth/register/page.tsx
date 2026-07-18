import RegisterForm from "@/components/templates/auth/RegisterForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "ثبت نام کنید",
  description:
    "صفحه ثبت نام کاربر ، از این صفحه میتوانید فرایند ثبت نام یا رجیستر را در سایت انجام دهید",
  openGraph: {
    title: "صفحه ثبت نام",
  },
};

function page() {
  return (
    <>
      <section className="h-screen md:px-4 flex items-center">
        <div className="container mx-auto max-w-screen-lg">
          <div className="bg-white shadow rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8">
              <RegisterForm />

              <div className="hidden md:block">
                <Image
                  className="bg-cover max-w-[413px] h-full"
                  src="/images/auth/sign-up.jpg"
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
    </>
  );
}

export default page;
