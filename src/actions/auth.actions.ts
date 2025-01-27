"use server";

export async function login(prevState: any, formData: FormData) {
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
        message: "Invalid Password.",
      };
    } else {
      return {
        status: "error",
        message: "Unexpected Error.",
      };
    }
  }

  return await res.json();
}
