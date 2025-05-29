import React from "react";

function Title({ content }: { content: string }) {
  const text = content.split(" ");
  return (
    <h2 className="text-lg md:text-xl lg:text-2xl pb-2 font-Lalezar text-zinc-700">
      <span className="text-yellow-500">{text[0]}</span> {text[1]} {text?.[2]}
    </h2>
  );
}

export default Title;
