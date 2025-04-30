import React from "react";

function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-4">{children}</div>
  );
}

export default Container;
