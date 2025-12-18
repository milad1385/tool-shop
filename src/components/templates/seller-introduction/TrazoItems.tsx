import React from "react";
import TrazoItem from "./TrazoItem";
import { trazoItems } from "@/constants/data";

function TrazoItems() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-3 md:gap-8 mt-8">
      {trazoItems.map((trazo) => (
        <TrazoItem {...trazo} key={trazo.id} />
      ))}
    </div>
  );
}

export default TrazoItems;
