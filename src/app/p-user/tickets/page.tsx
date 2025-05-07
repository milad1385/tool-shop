import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "تیکت ها - پنل کاربری",
  description:"لیست تیکت های خود را میتوانید مشاهده کنید",
  icons: {
    icon: "/images/tool.png",
  },
  openGraph: {
    title: "ابزار آلات ترازو",
  },
};

function page() {
  return (
    <div>page</div>
  )
}

export default page