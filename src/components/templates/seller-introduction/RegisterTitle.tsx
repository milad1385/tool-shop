import React from "react";

function RegisterTitle({
  content,
  step = 1,
}: {
  content: string;
  step?: number;
}) {
  return (
    <div>
      <h1 className="font-bold text-xl">{content}</h1>
    </div>
  );
}

export default RegisterTitle;
