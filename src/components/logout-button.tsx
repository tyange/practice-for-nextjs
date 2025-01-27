"use client";

import { useTransition } from "react";
import { logout } from "@/actions/auth.actions";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => logout())}
      className="mt-10 h-14 w-96 rounded-lg bg-slate-400 text-lg text-white"
      disabled={isPending}
    >
      {isPending ? "Logging out..." : "Log out"}
    </button>
  );
}
