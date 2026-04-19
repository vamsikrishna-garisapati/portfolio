"use client";

import { useEffect, useState } from "react";

export function HyderabadClock() {
  const [time, setTime] = useState("—:—:— —");

  useEffect(() => {
    const clock = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const update = () => setTime(clock.format(new Date()));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block min-w-[7.25rem] text-left text-xs tabular-nums text-stone-300 md:min-w-[8rem] md:text-sm">
      {time}
    </span>
  );
}
