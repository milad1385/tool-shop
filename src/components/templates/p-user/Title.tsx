import { IUserPanelTitle } from "@/libs/types";
import React from "react";

function Title({ content }: IUserPanelTitle) {
  return (
    <div className="p-3 bg-stone-200 rounded-xl my-4">
      <h2 className="font-Lalezar">{content}</h2>
    </div>
  );
}

export default Title;
