"use client";

import { useOptimistic, useTransition } from "react";
import { DAY_NAMES } from "@/constants/days";
import { IDeliverySlot, ITimeProps } from "@/libs/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Time({ dayOfWeek, slots, selectedSlot, onSelect }: ITimeProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [optimisticSelected, setOptimisticSelected] = useOptimistic(
    selectedSlot?._id || searchParams.get("slot"),
    (_, newValue: string) => newValue,
  );

  const [, startTransition] = useTransition();

  const hasCapacity = (slot: IDeliverySlot) =>
    slot.usedCapacity < slot.maxCapacity;

  const handleSelect = (slot: IDeliverySlot) => {
    startTransition(() => {
      setOptimisticSelected(slot._id);
    });

    onSelect(slot);

    const params = new URLSearchParams(searchParams.toString());
    params.set("slot", slot._id);
    router.push(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <div className="px-4 pt-2 pb-4 bg-gray-100 rounded-2xl">
      <h2 className="text-center font-Lalezar text-zinc-700">
        {DAY_NAMES[dayOfWeek]}
      </h2>
      <ul className="mt-4 space-y-3.5">
        {slots.map((slot) => {
          const isAvailable = hasCapacity(slot);
          const isSelected = optimisticSelected === slot._id;
          const fillPercentage = (slot.usedCapacity / slot.maxCapacity) * 100;

          return (
            <li key={slot._id} className="flex items-center gap-x-2 relative">
              <input
                type="radio"
                name="time"
                id={`slot-${slot._id}`}
                disabled={!isAvailable}
                checked={isSelected}
                onChange={() => isAvailable && handleSelect(slot)}
                className="accent-black disabled:cursor-not-allowed"
              />
              <label
                htmlFor={`slot-${slot._id}`}
                className={`text-sm cursor-pointer ${
                  !isAvailable
                    ? "text-gray-400 line-through cursor-not-allowed"
                    : isSelected
                      ? "text-yellow-600 font-bold"
                      : ""
                }`}
              >
                از {slot.startHour} تا {slot.endHour}
              </label>

              {!isAvailable && (
                <span className="absolute -top-2 -left-2 text-[10px] bg-red-500 text-white px-1.5 rounded-full">
                  پر
                </span>
              )}

              {isAvailable && fillPercentage >= 70 && (
                <span className="absolute -top-2 -left-2 text-[10px] bg-orange-500 text-white px-1.5 rounded-full">
                  {slot.maxCapacity - slot.usedCapacity} جا
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Time;
