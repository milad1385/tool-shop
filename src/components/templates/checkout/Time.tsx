import React from "react";

function Time({ clocks, weekName }) {
  return (
    <div className="px-4 pt-2 pb-4 bg-gray-100 rounded-2xl">
      <h2 className="text-center font-Lalezar text-zinc-700">{weekName}</h2>
      <ul className="mt-4 space-y-3.5">
        {clocks.map((clock) => (
          <li className="flex items-center gap-x-2">
            <input disabled={clock.isDisable} type="radio" className="accent-black" name="time" id={`clock-${clock.id}`} />
            <label htmlFor={`clock-${clock.id}`} className="text-sm">
              از {clock.minTime} تا {clock.maxTime}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Time;
