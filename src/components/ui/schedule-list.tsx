"use client";

import { ShippingSchedule } from "@/types/shipping-schedule.types";
import { use } from "react";

export default function ScheduleList({
  schedules,
}: {
  schedules: Promise<ShippingSchedule[]>;
}) {
  const scheduleItems = use(schedules);

  return (
    <ul>
      {scheduleItems.map((schedule) => (
        <li key={schedule.shippingScheduleCode}>{schedule.vesselName}</li>
      ))}
    </ul>
  );
}
