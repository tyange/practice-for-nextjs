"use server";

import { cookies } from "next/headers";

export async function setLang(lang: string | null) {
  const cookieStore = await cookies();

  cookieStore.set("lang", lang ?? "en");
}

export async function getLang() {
  const cookieStore = await cookies();

  return cookieStore.get("lang");
}
