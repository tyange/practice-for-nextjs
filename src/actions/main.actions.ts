"use server";

export async function getBanner() {
  const res = await fetch(
    `${process.env.V2_API_ROUTE}/main/v1/banners?lang=en`,
  );
  if (!res.ok) throw new Error(`HTTP error in ${res.url}: ${res.status}`);
  return res.json();
}
