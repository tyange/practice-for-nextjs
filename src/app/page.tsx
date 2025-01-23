import { ShippingSchedule } from "@/types/shipping-schedule.types";
import { V2Response } from "@/types/v2-response.types";

export default async function Home() {
  const res = await fetch("https://v2api.autowini.com/shipping/v3/schedule");
  const data: V2Response<{
    totalCount: number;
    shippingSchedules: ShippingSchedule[];
  }> = await res.json();
  return (
    <div className="w-screen h-screen">
      <ul>
        {data.data.shippingSchedules.map((schedule) => (
          <li key={schedule.shippingScheduleCode}>{schedule.vesselName}</li>
        ))}
      </ul>
    </div>
  );
}
