import { Suspense } from "react";

import { getShippingSchedule } from "@/actions/shipping-schedule.action";

import ScheduleList from "@/components/schedule-list";
import Filter from "@/components/filter";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page?: string;
    pageSize?: string;
    vesselTypes?: string;
    shippingLines?: string;
  };
}) {
  return (
    <div className="w-screen h-screen">
      <Filter />
      <Suspense fallback={<p>Loading...</p>}>
        <ScheduleList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
