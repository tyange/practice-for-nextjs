import { Suspense } from "react";
import { SearchParams } from "next/dist/server/request/search-params";

import ScheduleList from "@/components/schedule-list";
import ShippingScheduleFilter from "@/components/shipping-schedule-filter";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  return (
    <div className="h-screen w-screen">
      <ShippingScheduleFilter searchParams={params} />
      <Suspense fallback={<p>Loading...</p>}>
        <ScheduleList searchParams={params} />
      </Suspense>
    </div>
  );
}
