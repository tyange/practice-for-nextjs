"use server";

import { ShippingSchedule } from "../types/shipping-schedule.types";
import { V2Response } from "../types/v2-response.types";

export async function getShippingSchedule(
  vesselTypeCodeList?: string[],
  shippingLineCodeList?: string[]
): Promise<{ totalCount: number; shippingSchedules: ShippingSchedule[] }> {
  const res = await fetch("https://v2api.autowini.com/shipping/v3/schedule");
  const data: V2Response<{
    totalCount: number;
    shippingSchedules: ShippingSchedule[];
  }> = await res.json();

  return data.data;
}
