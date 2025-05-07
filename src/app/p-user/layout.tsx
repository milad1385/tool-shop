import Navbar from "@/components/modules/p-user/Navbar";
import Sidebar from "@/components/modules/p-user/Sidebar";
import React from "react";

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
          <div className="col-span-12 lg:col-span-9 lg:mr-10">{children}</div>
        </div>
      </div>
    </>
  );
}

export default layout;
