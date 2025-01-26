import { Suspense } from "react";

import ScheduleList from "@/components/schedule-list";
import ShippingScheduleFilter from "@/components/shipping-schedule-filter";

type Params = Promise<{
  page?: string;
  size?: string;
  vesselTypeCodeList?: string;
  shippingLineCodeList?: string;
}>;

export default async function Home({ params }: { params: Params }) {
  const searchParams = await params;

  return (
    <div className="h-screen w-screen">
      <ShippingScheduleFilter searchParams={searchParams} />
      <Suspense fallback={<p>Loading...</p>}>
        <ScheduleList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
