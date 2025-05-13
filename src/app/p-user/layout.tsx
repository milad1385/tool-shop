import MobileMenu from "@/components/modules/p-user/MobileMenu";
import Navbar from "@/components/modules/p-user/Navbar";
import Sidebar from "@/components/modules/p-user/Sidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "پنل کاربری",
  description:
    "در این پنل شما میتوانید به مدیریت حساب کاربری خود برسید و اطلاعات کاربری را ویرایش کرده و کامنت ها و تیکت های خود را مشاهده کنید",
  icons: {
    icon: "/images/tool.png",
  },
  openGraph: {
    title: "ابزار آلات ترازو",
  },
};

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="grid grid-cols-12 min-h-screen pb-5">
          <Sidebar />
          <div className="col-span-12 lg:col-span-9 lg:mr-10">
            <MobileMenu />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default layout;
