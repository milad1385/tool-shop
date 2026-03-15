import React from "react";
import Title from "./Title";
import Time from "./Time";
import { deliverTimes } from "@/constants/data";

function ChooseTime() {
  
  return (
    <div className="mt-5">
      <Title title="انتخاب زمان ارسال" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-6 gap-5">
        {deliverTimes.map(time =>(
          <Time {...time} key={time.id}/>
        ))}
      </div>
    </div>
  );
}

export default ChooseTime;
