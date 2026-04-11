import Sidebar from "@/components/modules/p-admin/Sidebar";
import Topbar from "@/components/modules/p-admin/Topbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | پنل فروشنده",
    default: "پنل فروشنده  ترازو",
  },
  description:
    "پنل فروشنده ترازو برای مدیریت محتوا های سایت ترازو توسط فروشنده های وب سایت میباشد",
  icons: {
    icon: "/images/tool.png",
  },
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 h-screen">
      <Sidebar title="پنل مدیریت فروشنده" />
      <div className="col-span-12 lg:col-span-10">
        <Topbar />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export default layout;
