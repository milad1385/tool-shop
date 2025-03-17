import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "وارد شوید",
  description:
    "صفحه ورود کاربر ، از این صفحه میتوانید فرایند لاگین یا همان ورود را در سایت انجام دهید",
  openGraph: {
    title: "صفحه ورود",
  },
};

function page() {
  return (
    <>
      <section className="h-screen px-4 flex items-center">
        <div className="container mx-auto max-w-screen-lg">
          <div className="bg-white shadow rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 p-8 md:p-4 lg:p-16 lg:pb-0">
                <h2 className="text-center text-2xl lg:text-4xl font-Lalezar">
                  صفحه ورود
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
                    ورود
                  </button>
                </div>
                <div className="flex flex-col gap-y-2 mt-5">
                  <Link href="/auth/forget" className="text-center text-sm">
                    رمز عبور خود را فراموش کرده اید ؟
                  </Link>
                  <div className="divider my-8">
                    <span className="px-2 text-sm">یا</span>
                  </div>
                  <Link href="/auth/register" className="text-center text-sm">
                    حساب کاربری ندارید ؟
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
    </>
  );
}

export default page;
