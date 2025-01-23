"use server";

import { ShippingSchedule } from "../types/shipping-schedule.types";
import { V2Response } from "../types/v2-response.types";

export async function getShippingSchedule({
  page,
  pageSize,
  vesselTypeCodeList,
  shippingLineCodeList,
}: {
  page?: number;
  pageSize?: number;
  vesselTypeCodeList?: string[];
  shippingLineCodeList?: string[];
}): Promise<{
  totalCount: number;
  shippingSchedules: ShippingSchedule[];
}> {
  const searchParams = new URLSearchParams();
  if (page && page > 0) {
    searchParams.append("page", page.toString());
  }
  if (pageSize) {
    searchParams.append("size", pageSize.toString());
  }
  const url = new URL(
    `https://v2api.autowini.com/shipping/v3/schedule?${searchParams}`
  );
  const res = await fetch(url);
  const data: V2Response<{
    totalCount: number;
    shippingSchedules: ShippingSchedule[];
  }> = await res.json();

  return data.data;
}
