import React from "react";

function Title({ title }: { title?: string }) {
  return (
    <h2 className="text-base md:text-lg text-zinc-800 font-bold">{title}</h2>
  );
}

export default Title;
