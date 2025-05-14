import { IUserPanelTitle } from "@/libs/types";
import React from "react";

function Title({ content , children }: IUserPanelTitle) {
  return (
    <div className="p-3 bg-stone-200 rounded-xl my-4 flex items-center justify-between">
      <h2 className="font-Lalezar">{content}</h2>
      {children}
    </div>
  );
}

export default Title;
