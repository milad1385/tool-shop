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
      <section className="h-screen px-4 flex items-center">
        <div className="container mx-auto max-w-screen-lg">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 p-6 md:p-4 lg:p-14 lg:pb-0">
                <h2 className="text-center text-2xl lg:text-4xl font-Lalezar">
                  صفحه ثبت نام
                </h2>
                <div className="flex flex-col gap-y-5 mt-8">
                  <div className="flex flex-col gap-y-4">
                    <label htmlFor="username" className="text-sm text-zinc-800">
                      نام کاربری
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      dir="ltr"
                      className="input text-left p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <label htmlFor="email" className="text-sm text-zinc-800">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      dir="ltr"
                      className="input text-left p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <label htmlFor="phone" className="text-sm text-zinc-800">
                      شماره همراه
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      dir="ltr"
                      className="input text-left p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <label htmlFor="password" className="text-sm text-zinc-800">
                      رمز عبور
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="input text-left p-2 border border-gray-300 rounded-md"
                      autoComplete="off"
                      dir="ltr"
                    />
                  </div>
                  <button className="p-3 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-full my-4">
                    ثبت نام
                  </button>
                </div>
                <Link href="/auth/login" className="text-center mx-auto block text-sm mt-2 mb-4">
                  قبلا ثبت نام کرده اید؟ وارد شوید
                </Link>
              </div>
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
