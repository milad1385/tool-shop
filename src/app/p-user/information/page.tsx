import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "اطلاعات کاربری ها - پنل کاربری",
  description:"اطلاعات کاربری خود را میتوانید مشاهده کنید",
  icons: {
    icon: "/images/tool.png",
  },
  openGraph: {
    title: "ابزار آلات ترازو",
  },
};

function page() {
  return <div>page</div>;
}

export default page;
