"use client";

import { WEEK_DAYS } from "@/constants/days";
import { IChooseTimeProps, IDeliverySlot } from "@/libs/types";
import { useState } from "react";
import Time from "./Time";

function ChooseTime({ slotsByDay }: IChooseTimeProps) {
  const [selectedSlot, setSelectedSlot] = useState<IDeliverySlot | null>(null);

  const daysWithSlots = WEEK_DAYS.filter(
    (day) => slotsByDay[day] && slotsByDay[day].length > 0,
  );

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-6 gap-5">
        {daysWithSlots.map((dayOfWeek) => (
          <Time
            key={dayOfWeek}
            dayOfWeek={dayOfWeek}
            slots={slotsByDay[dayOfWeek]}
            selectedSlot={selectedSlot}
            onSelect={setSelectedSlot}
          />
        ))}
      </div>
    </div>
  );
}

export default ChooseTime;
