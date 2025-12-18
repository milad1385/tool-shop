import React from "react";

function Title({ content }: { content: string }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg md:text-xl font-bold text-zinc-700">{content}</h3>
      <span className="block h-[2.5px] bg-yellow-500 w-20 mt-5"></span>
    </div>
  );
}

export default Title;
