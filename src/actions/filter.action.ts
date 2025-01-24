"use server";

import { ShippingTypes } from "@/types/shipping-types.types";
import { V2Response } from "@/types/v2-response.types";

export async function getFilterByVesselType({
  vesselTypeCodeList,
  shippingLineCodeList,
}: {
  vesselTypeCodeList?: string[];

  shippingLineCodeList?: string[];
}): Promise<ShippingTypes> {
  const searchParams = new URLSearchParams();
  if (vesselTypeCodeList && vesselTypeCodeList.length > 0) {
    searchParams.append("page", vesselTypeCodeList.join(","));
  }
  if (shippingLineCodeList && shippingLineCodeList.length > 0) {
    searchParams.append("size", shippingLineCodeList.join(","));
  }

  const url = new URL(
    `${process.env.API_ROUTE}/shipping/schedule/count?${searchParams}`
  );

  const res = await fetch(url);
  const data: V2Response<ShippingTypes> = await res.json();

  return data.data;
}
