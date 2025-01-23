"use server";

import { ShippingTypes } from "@/types/shipping-types.types";
import { V2Response } from "@/types/v2-response.types";

export async function getFilterByVesselType(
  vesselTypeCodeList?: string[]
): Promise<ShippingTypes> {
  const res = await fetch(`${process.env.API_ROUTE}/shipping/schedule/count`);
  const data: V2Response<ShippingTypes> = await res.json();

  return data.data;
}
