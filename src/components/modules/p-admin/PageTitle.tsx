import React from "react";

function PageTitle({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const text = content.split(" ");
  return (
    <h2
      className={`text-lg md:text-xl lg:text-3xl pb-2 font-Lalezar text-zinc-700 flex items-center gap-x-2 ${className}`}
    >
      <span>{text[0]}</span>
      <span className="text-yellow-500">
        {text[1]} {text?.[2]} {text?.[3]}
      </span>
    </h2>
  );
}

export default PageTitle;
