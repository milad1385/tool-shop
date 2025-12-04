import React from "react";

function ToolTipBox({ text }: { text: string }) {
  return (
    <div className="absolute right-8 -top-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible px-4 py-3 z-[35] rounded-md shadow flex-center text-sm bg-zinc-700 text-white w-auto inline-block whitespace-nowrap">
      {text}
    </div>
  );
}

export default ToolTipBox;
