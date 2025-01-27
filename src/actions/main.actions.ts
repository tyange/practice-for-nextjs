"use server";

export async function getBanner() {
  const res = await fetch(
    `${process.env.V2_API_ROUTE}/main/v1/banners?lang=en`,
  );
  if (!res.ok) throw new Error(`HTTP error in ${res.url}: ${res.status}`);
  return res.json();
}

export async function getInspectedVehicle() {
  const res = await fetch(
    `${process.env.V2_API_ROUTE}/items/cars?pageSize=2&sorting=recentdate&freshStock=false&inspectionReportUploaded=true`,
  );
  if (!res.ok) throw new Error(`HTTP error in ${res.url}: ${res.status}`);
  return res.json();
}
