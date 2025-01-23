import { Suspense } from "react";

import { getShippingSchedule } from "@/actions/shipping-schedule.action";

import Filter from "@/components/filter";
import ScheduleList from "@/components/schedule-list";

export default function Home() {
  const schedules = getShippingSchedule();
  return (
    <div className="w-screen h-screen">
      <Filter />
      <Suspense fallback={<p>Loading...</p>}>
        <ScheduleList schedules={schedules} />
      </Suspense>
    </div>
  );
}
