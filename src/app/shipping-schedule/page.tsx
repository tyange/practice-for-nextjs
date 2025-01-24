import { Suspense } from "react";
import { SearchParams } from "next/dist/server/request/search-params";

import ScheduleList from "@/components/schedule-list";
import Filter from "@/components/filter/filter";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  return (
    <div className="w-screen h-screen">
      <Filter searchParams={params} />
      <Suspense fallback={<p>Loading...</p>}>
        <ScheduleList searchParams={params} />
      </Suspense>
    </div>
  );
}
