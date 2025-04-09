import { ITitle } from "@/libs/types";
import React from "react";

function Title({ title , className }: ITitle) {
  return (
    <h3 className={`text-2xl md:text-3xl lg:text-4xl text-center font-Lalezar mb-10 ${className}`}>
      {title}
    </h3>
  );
}

export default Title;
