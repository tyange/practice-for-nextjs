"use client";

import {
  useState,
  ChangeEvent,
  useActionState,
  FocusEvent,
  useEffect,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserRound,
  Lock,
  Square,
  SquareCheckBig,
  LoaderCircle,
} from "lucide-react";

import { login } from "@/actions/auth.actions";

export default function LoginForm() {
  const [isError, setIsError] = useState(false);
  const [state, formAction, pending] = useActionState(login, {
    status: "idle",
    message: "",
  });

  function handleFocus(e: FocusEvent<HTMLFormElement>) {
    if (state.status !== "error") {
      return;
    }

    if (!isError) {
      return;
    }

    setIsError(false);
  }

  useEffect(() => {
    if (state.status !== "error") {
      return;
    }

    setIsError(true);
  }, [state]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <div className="flex w-full flex-col items-center">
        <div>
          <Link className="relative block h-20 w-80" href="/">
            <Image
              fill
              src="https://image.autowini.com/IMG/mobile/common/logo.svg"
              alt="autowini logo"
            />
          </Link>
        </div>
        <div className="flex w-80 flex-col items-center justify-center">
          <span className="text-xl">Sign in to Autowini.com</span>
          <span className="text-xl">No. 1 Auto Trading Platform in Korea.</span>
        </div>
      </div>
      <form
        action={formAction}
        className="flex w-96 flex-col items-center justify-center gap-3"
        onFocus={handleFocus}
      >
        <label className="flex w-full rounded-lg border border-gray-300 p-3">
          <UserRound size={32} className="flex-shrink-0" color="#8d8b8b" />
          <input type="text" name="username" className="w-full flex-shrink" />
        </label>
        <label className={`flex w-full rounded-lg border border-gray-300 p-3`}>
          <Lock size={32} className="flex-shrink-0" color="#8d8b8b" />
          <input
            type="password"
            name="password"
            className="w-full flex-shrink"
          />
        </label>
        {isError && state.message && (
          <p
            className={`mt-1 text-sm ${state.status === "error" ? "text-red-500" : "text-gray-500"}`}
          >
            {state.message}
          </p>
        )}
        <div className="h-14 w-full">
          <button
            className={`h-full w-full rounded-lg ${!pending ? "bg-[#00ab68]" : "bg-gray-400"} flex items-center justify-center text-lg font-medium text-white`}
            disabled={pending}
          >
            {pending ? (
              <LoaderCircle size={32} color="#fff" className="animate-spin" />
            ) : (
              <span>Sign in</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
