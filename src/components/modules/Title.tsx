import React from "react";

function Title({ title }: ITitle) {
  return (
    <h3 className="text-xl md:text-3xl lg:text-4xl text-center font-Lalezar mb-10">
      {title}
    </h3>
  );
}

export default Title;
