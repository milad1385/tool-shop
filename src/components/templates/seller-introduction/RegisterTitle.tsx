import React from "react";

function RegisterTitle({
  content,
  step = 1,
}: {
  content: string;
  step?: number;
}) {
  return (
    <div className="px-5 md:px-0 mt-10">
      <h1 className="font-bold text-base md:text-xl">{content}</h1>
    </div>
  );
}

export default RegisterTitle;
