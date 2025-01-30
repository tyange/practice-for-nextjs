"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";

export async function login(_: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const res = await fetch("http://localhost:3002/api/login", {
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

  // 현재는 Mocking API에서 가짜 토큰을 발급해주기 때문에, 그 토큰을 쿠키에 저장해 로그인 여부를 제어한다.
  const data = await res.json();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();
  cookieStore.set("token", data.token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  // 직접 토큰을 만들어서 쿠키에 넣을 수도 있다.
  // createSession(data.userId);
  redirect("/my-wini");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete({ name: "token", path: "/" });
  redirect("/");
}
