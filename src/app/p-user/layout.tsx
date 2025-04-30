import Container from "@/components/modules/Container";
import Sidebar from "@/components/templates/p-user/Sidebar";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="grid grid-cols-12 min-h-screen pb-5">
        <Sidebar/>
        <div className="col-span-12 lg:col-span-9 lg:mr-10">{children}</div>
      </div>
    </Container>
  );
}

export default layout;
