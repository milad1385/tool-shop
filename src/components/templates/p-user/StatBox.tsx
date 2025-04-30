import { IStatBox } from "@/libs/types";
import React from "react";

function StatBox({ className, title, desc, icon }: IStatBox) {
  return <div className={`${className}`}>StatsBox</div>;
}

export default StatBox;
