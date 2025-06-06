import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>;
}

export default Container;
