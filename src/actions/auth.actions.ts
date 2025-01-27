"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";

export async function login(_: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const res = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    if (res.status === 401) {
      return {
        status: "error",
        message: "Invalid Password",
      };
    } else {
      return {
        status: "error",
        message: "Unexpected Error",
      };
    }
  }

  const data = await res.json();

  createSession(data.userId);
  redirect("/my-wini");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete({ name: "token", path: "/" });
  redirect("/");
}
