import React from "react";

function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container mt-28 md:mt-48">{children}</div>;
}

export default Container;
